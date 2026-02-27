'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function MiniApp() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<null | 'why' | 'calc'>(null);
  const [spendAmount, setSpendAmount] = useState(1000);

  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";
  const zyptoGreen = '#00ff88';

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleCheckRewards = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1200);
  };

  // Kalkulaatori loogika põhinedes strateegial
  const welcomeBonus = 5; // Ühekordne tervitusboonus 
  const referralComm = (spendAmount * 0.001).toFixed(2); // 0.1% eluaegne komisjon 
  const zypsBack = (spendAmount * 0.03).toFixed(0); // ~3% ZYPsBack (cashback/rewards) [cite: 54, 74]
  const totalPotential = (welcomeBonus + parseFloat(referralComm) + parseFloat(zypsBack)).toFixed(0);

  return (
    <div style={{ 
      backgroundColor: '#050505', minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'center', padding: '12px 12px 80px 12px',
      color: 'white', overflow: 'hidden', position: 'relative'
    }}>
      
      {/* LOGO */}
      <div style={{ marginBottom: '16px' }}>
        <img src="/icon.png" alt="Logo" style={{ width: '60px', height: '60px', borderRadius: '14px' }} />
      </div>

      {/* PÕHIKAART */}
      <div style={{ 
        width: '100%', maxWidth: '300px', backgroundColor: '#111113', 
        padding: '24px 16px', borderRadius: '28px', textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.08)', zIndex: 1
      }}>
        
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '8px' }} />
            <h1 style={{ fontSize: '18px', margin: '14px 0', fontWeight: '900' }}>Verify Wallet</h1>
            <button 
              onClick={handleCheckRewards}
              disabled={isLoading}
              style={{ 
                width: '100%', padding: '14px', backgroundColor: isLoading ? '#1a1a1a' : zyptoGreen, 
                color: 'black', border: 'none', borderRadius: '12px', fontWeight: '800', cursor: 'pointer'
              }}
            >
              {isLoading ? "Verifying..." : "Check Rewards"}
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '8px' }} />
            <h1 style={{ color: zyptoGreen, margin: '14px 0', fontSize: '24px', fontWeight: '900' }}>VERIFIED!</h1>
            <button onClick={() => setStep(3)} style={{ width: '100%', padding: '14px', backgroundColor: zyptoGreen, color: 'black', border: 'none', borderRadius: '12px', fontWeight: '800' }}>
              See Rewards
            </button>
          </div>
        )}

        {step === 3 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '18px', marginBottom: '8px' }} />
            
            <a href={referralUrl} target="_blank" rel="noopener noreferrer" style={{ 
                display: 'block', width: '100%', padding: '16px 0', marginTop: '16px', 
                background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, 
                color: 'black', textDecoration: 'none', borderRadius: '12px', 
                fontWeight: '900', fontSize: '18px', boxShadow: '0 8px 20px rgba(0,255,136,0.3)'
            }}>
              Claim Rewards
            </a>
            
            {/* UUENDATUD DISKREETSED NUPUD */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <button 
                onClick={() => setActiveOverlay('why')}
                style={{ 
                  flex: 1, padding: '10px', fontSize: '11px', fontWeight: '700',
                  background: 'rgba(255,255,255,0.03)', color: 'white', 
                  border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px',
                  cursor: 'pointer', transition: 'all 0.2s'
                }}
              >
                Why Zypto?
              </button>
              <button 
                onClick={() => setActiveOverlay('calc')}
                style={{ 
                  flex: 1, padding: '10px', fontSize: '11px', fontWeight: '700',
                  background: 'rgba(255,255,255,0.03)', color: 'white', 
                  border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px',
                  cursor: 'pointer'
                }}
              >
                Earn Calc
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MODAL OVERLAY */}
      {activeOverlay && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 10, display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: '20px', animation: 'fadeIn 0.2s'
        }}>
          <div style={{
            backgroundColor: '#111113', width: '100%', maxWidth: '320px',
            borderRadius: '28px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative'
          }}>
            <button 
              onClick={() => setActiveOverlay(null)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#666', fontSize: '22px', cursor: 'pointer' }}
            >✕</button>

            {activeOverlay === 'why' && (
              <div style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '900', color: zyptoGreen }}>All-in-One Power</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '18px' }}>🏦</span>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '14px' }}>Replace 5 Apps</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Wallet, Exchange, Cards and Bill Pay in one.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '18px' }}>💳</span>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '14px' }}>Real World Spending</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Virtual & Physical Visa cards accepted globally.</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '18px' }}>🔐</span>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '14px' }}>Non-Custodial Security</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Your keys, your crypto. Total control.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeOverlay === 'calc' && (
              <div>
                <h2 style={{ fontSize: '20px', marginBottom: '8px', fontWeight: '900', color: zyptoGreen }}>Your Potential</h2>
                <p style={{ fontSize: '12px', color: '#888', marginBottom: '20px' }}>Based on $5 bonus + monthly activity</p>
                
                <input 
                  type="range" min="100" max="5000" step="100" 
                  value={spendAmount} onChange={(e) => setSpendAmount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: zyptoGreen, marginBottom: '20px', cursor: 'pointer' }}
                />
                
                <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                    <span style={{ color: '#aaa' }}>Welcome Bonus</span>
                    <span style={{ fontWeight: '700', color: zyptoGreen }}>+${welcomeBonus}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                    <span style={{ color: '#aaa' }}>ZYPsBack (Personal)</span>
                    <span style={{ fontWeight: '700' }}>+${zypsBack}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                    <span style={{ color: '#aaa' }}>Referral Rewards (0.1%)</span>
                    <span style={{ fontWeight: '700' }}>+${referralComm}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding: '12px', backgroundColor: 'rgba(0,255,136,0.08)', borderRadius: '12px' }}>
                    <span style={{ fontWeight: '800' }}>Total Est. Value</span>
                    <span style={{ fontWeight: '900', color: zyptoGreen, fontSize: '18px' }}>${totalPotential}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TICKER */}
      <div className="ticker-wrap" style={{
        position: 'fixed', bottom: 0, left: 0, width: '100%',
        backgroundColor: 'rgba(17, 17, 19, 0.8)', backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 0', overflow: 'hidden'
      }}>
        <div className="ticker" style={{
          display: 'inline-block', whiteSpace: 'nowrap', paddingLeft: '100%',
          animation: 'marquee 25s linear infinite', fontSize: '12px', fontWeight: 'bold', color: '#888'
        }}>
          🚀 84 legends joined this hour • <span style={{ color: zyptoGreen }}>$5 Instant Bonus Active</span> • 0.1% Lifetime Swap Commissions • Earn ZYPs on every spend • Available in 190+ countries
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes marquee {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100%, 0); }
        }
      `}</style>
    </div>
  );
}
