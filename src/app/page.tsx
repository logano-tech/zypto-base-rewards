'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function MiniApp() {
  // Olemasolevad olekud
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  // Uued olekud lisakihtide jaoks
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

  // Kalkulaatori loogika: eeldame u 3% preemiat (ZYP-id + cashback) 
  const estimatedRewards = (spendAmount * 0.03).toFixed(0);

  return (
    <div style={{ 
      backgroundColor: '#050505', 
      minHeight: '100vh', 
      width: '100%',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '12px 12px 60px 12px', // Altpoolt vaba ruumi tickeri jaoks
      color: 'white',
      overflow: 'hidden',
      position: 'relative'
    }}>
      
      {/* LOGO JA PÕHISISU */}
      <div style={{ marginBottom: '16px' }}>
        <img src="/icon.png" alt="Logo" style={{ width: '60px', height: '60px', borderRadius: '14px' }} />
      </div>

      <div style={{ 
        width: '100%', 
        maxWidth: '300px', 
        backgroundColor: '#111113', 
        padding: '24px 16px', 
        borderRadius: '28px', 
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.08)',
        zIndex: 1
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
            <button 
              onClick={() => setStep(3)}
              style={{ width: '100%', padding: '14px', backgroundColor: zyptoGreen, color: 'black', border: 'none', borderRadius: '12px', fontWeight: '800' }}
            >
              See Rewards
            </button>
          </div>
        )}

        {step === 3 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '18px', marginBottom: '8px' }} />
            
            <a 
              href={referralUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'block', width: '100%', padding: '16px 0', marginTop: '16px', 
                background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, 
                color: 'black', textDecoration: 'none', borderRadius: '12px', 
                fontWeight: '900', fontSize: '18px', boxShadow: '0 8px 20px rgba(0,255,136,0.3)'
              }}
            >
              Claim Rewards
            </a>
            
            {/* UUED DISKREETSED NUPUD SAMM 3 ALL */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              <button 
                onClick={() => setActiveOverlay('why')}
                style={{ flex: 1, padding: '8px', fontSize: '11px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#ccc', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
              >
                Why Zypto?
              </button>
              <button 
                onClick={() => setActiveOverlay('calc')}
                style={{ flex: 1, padding: '8px', fontSize: '11px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#ccc', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
              >
                Earn Calc
              </button>
            </div>
          </div>
        )}
      </div>

      {/* INFO-KIHTIDE MODAL (OVERLAY) */}
      {activeOverlay && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 10, display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: '20px', animation: 'fadeIn 0.3s'
        }}>
          <div style={{
            backgroundColor: '#111113', width: '100%', maxWidth: '320px',
            borderRadius: '24px', padding: '20px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative'
          }}>
            <button 
              onClick={() => setActiveOverlay(null)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#666', fontSize: '20px', fontWeight: 'bold' }}
            >✕</button>

            {activeOverlay === 'why' && (
              <div>
                <h2 style={{ fontSize: '18px', marginBottom: '15px', color: zyptoGreen }}>Why Zypto App?</h2>
                <div style={{ textAlign: 'left', fontSize: '13px', lineHeight: '1.6' }}>
                  <p>✅ <b>5 Apps in 1:</b> Wallet, Card, Bills & More [cite: 58]</p>
                  <p>✅ <b>Spend Anywhere:</b> Visa/Mastercard in 140+ countries [cite: 78]</p>
                  <p>✅ <b>Non-Custodial:</b> You always control your keys [cite: 70]</p>
                  <p>✅ <b>No Bridging:</b> Swap across 70+ chains instantly [cite: 66]</p>
                </div>
              </div>
            )}

            {activeOverlay === 'calc' && (
              <div>
                <h2 style={{ fontSize: '18px', marginBottom: '10px', color: zyptoGreen }}>Rewards Calculator</h2>
                <p style={{ fontSize: '12px', color: '#888', marginBottom: '15px' }}>Estimate your monthly earnings</p>
                
                <input 
                  type="range" min="100" max="5000" step="100" 
                  value={spendAmount} onChange={(e) => setSpendAmount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: zyptoGreen, marginBottom: '15px' }}
                />
                
                <div style={{ backgroundColor: 'rgba(0,255,136,0.05)', padding: '15px', borderRadius: '12px', border: '1px dashed #00ff8844' }}>
                  <div style={{ fontSize: '12px', color: '#aaa' }}>If you spend <b>${spendAmount}/mo</b></div>
                  <div style={{ fontSize: '24px', fontWeight: '900', color: zyptoGreen, margin: '5px 0' }}>~${estimatedRewards}</div>
                  <div style={{ fontSize: '11px', color: '#666' }}>back in ZYP rewards per month </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SOCIAL PROOF TICKER */}
      <div className="ticker-wrap" style={{
        position: 'fixed', bottom: 0, left: 0, width: '100%',
        backgroundColor: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '8px 0', overflow: 'hidden'
      }}>
        <div className="ticker" style={{
          display: 'inline-block', whiteSpace: 'nowrap', paddingLeft: '100%',
          animation: 'marquee 20s linear infinite', fontSize: '12px', fontWeight: 'bold', color: '#aaa'
        }}>
          🔥 84 legends joined this hour | <span style={{ color: zyptoGreen }}>0.1% lifetime swap rewards active</span> | $5 signup bonus live 
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes marquee {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-100%, 0); }
        }
        .ticker-wrap .ticker {
          display: inline-block;
          padding-right: 100%;
        }
      `}</style>
    </div>
  );
}
