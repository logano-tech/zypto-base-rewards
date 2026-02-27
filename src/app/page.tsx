'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function MiniApp() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<null | 'why' | 'calc'>(null);
  
  // Calculator variables
  const [numReferrals, setNumReferrals] = useState(5);
  const [refVolume, setRefVolume] = useState(10000);
  const [numVKC, setNumVKC] = useState(2);
  const [ownSpend, setOwnSpend] = useState(8000);

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

  // Logic based on the Marketing Strategy
  const welcomeBonusTotal = numReferrals * 5; // $5 per referral [cite: 4]
  const swapComm = refVolume * 0.001; // 0.1% commission [cite: 5]
  const vkcBonus = numVKC * 25; // $25 per VKC [cite: 6]
  const zypsBack = ownSpend * 0.03125; // Aiming for ~$250 at $8000 spend [cite: 74]
  const totalMonthly = (welcomeBonusTotal + swapComm + vkcBonus + zypsBack).toFixed(0);

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

      {/* MAIN CARD */}
      <div style={{ 
        width: '100%', maxWidth: '300px', backgroundColor: '#111113', 
        padding: '24px 16px', borderRadius: '28px', textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.08)', zIndex: 1
      }}>
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '8px' }} />
            <h1 style={{ fontSize: '18px', margin: '14px 0', fontWeight: '900' }}>Verify Wallet</h1>
            <button onClick={handleCheckRewards} disabled={isLoading} style={{ width: '100%', padding: '14px', backgroundColor: isLoading ? '#1a1a1a' : zyptoGreen, color: 'black', border: 'none', borderRadius: '12px', fontWeight: '800', cursor: 'pointer' }}>
              {isLoading ? "Verifying..." : "Check Rewards"}
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '8px' }} />
            <h1 style={{ color: zyptoGreen, margin: '14px 0', fontSize: '24px', fontWeight: '900' }}>VERIFIED!</h1>
            <button onClick={() => setStep(3)} style={{ width: '100%', padding: '14px', backgroundColor: zyptoGreen, color: 'black', border: 'none', borderRadius: '12px', fontWeight: '800' }}>See Rewards</button>
          </div>
        )}

        {step === 3 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '18px', marginBottom: '8px' }} />
            <a href={referralUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', padding: '16px 0', marginTop: '16px', background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, color: 'black', textDecoration: 'none', borderRadius: '12px', fontWeight: '900', fontSize: '18px', boxShadow: '0 8px 20px rgba(0,255,136,0.3)' }}>Claim Rewards</a>
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              <button onClick={() => setActiveOverlay('why')} style={{ flex: 1, padding: '10px', fontSize: '11px', fontWeight: '700', background: 'rgba(255,255,255,0.03)', color: 'white', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', cursor: 'pointer' }}>Why Zypto?</button>
              <button onClick={() => setActiveOverlay('calc')} style={{ flex: 1, padding: '10px', fontSize: '11px', fontWeight: '700', background: 'rgba(255,255,255,0.03)', color: 'white', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', cursor: 'pointer' }}>Earn Calc</button>
            </div>
          </div>
        )}
      </div>

      {/* MODAL OVERLAY */}
      {activeOverlay && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', animation: 'fadeIn 0.2s' }}>
          <div style={{ backgroundColor: '#111113', width: '100%', maxWidth: '320px', borderRadius: '28px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
            <button onClick={() => setActiveOverlay(null)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#666', fontSize: '22px', cursor: 'pointer' }}>✕</button>

            {activeOverlay === 'why' && (
              <div style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '900', color: zyptoGreen }}>All-in-One Power</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '18px' }}>🏦</span>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '14px' }}>Replace 5 Apps</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Wallet, Exchange, Cards and Bill Pay in one</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '18px' }}>💳</span>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '14px' }}>Real World Spending</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Virtual & Physical Visa cards accepted globally</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '18px' }}>🔐</span>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '14px' }}>Non-Custodial Security</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Your keys, your crypto. Total control</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '18px' }}>🛡️</span>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '14px' }}>Zypto Vault Key Card</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>Tap-to-transact cold storage for maximum safety</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeOverlay === 'calc' && (
              <div style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '8px', fontWeight: '900', color: zyptoGreen }}>Earnings Estimator</h2>
                
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '11px', color: '#888' }}>New Referrals: <b>{numReferrals}</b></label>
                  <input type="range" min="1" max="50" value={numReferrals} onChange={(e) => setNumReferrals(Number(e.target.value))} style={{ width: '100%', accentColor: zyptoGreen, display: 'block' }} />
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '11px', color: '#888' }}>Ref. Monthly Volume: <b>${refVolume.toLocaleString()}</b></label>
                  <input type="range" min="1000" max="50000" step="1000" value={refVolume} onChange={(e) => setRefVolume(Number(e.target.value))} style={{ width: '100%', accentColor: zyptoGreen, display: 'block' }} />
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '11px', color: '#888' }}>VKC Sales: <b>{numVKC}</b></label>
                  <input type="range" min="0" max="10" value={numVKC} onChange={(e) => setNumVKC(Number(e.target.value))} style={{ width: '100%', accentColor: zyptoGreen, display: 'block' }} />
                </div>

                <div style={{ backgroundColor: 'rgba(0,255,136,0.06)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(0,255,136,0.15)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                    <span>Referral Bonuses ($5)</span><span>${welcomeBonusTotal}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                    <span>Swap Comm (0.1%)</span><span>${swapComm}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                    <span>VKC Bonuses ($25)</span><span>${vkcBonus}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px', marginBottom: '4px' }}>
                    <span>Your ZYPsBack (~$250)</span><span>+${zypsBack.toFixed(0)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                    <span style={{ fontWeight: '800' }}>Est. Monthly Total</span>
                    <span style={{ fontWeight: '900', color: zyptoGreen, fontSize: '18px' }}>${totalMonthly}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TICKER */}
      <div className="ticker-wrap" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(17, 17, 19, 0.8)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 0', overflow: 'hidden' }}>
        <div className="ticker" style={{ display: 'inline-block', whiteSpace: 'nowrap', paddingLeft: '100%', animation: 'marquee 25s linear infinite', fontSize: '12px', fontWeight: 'bold', color: '#888' }}>
          🚀 Already 84 legends joined via this mini-app! • <span style={{ color: zyptoGreen }}>$5 Instant Bonus Active</span> • 0.1% Lifetime Swap Commissions • $25 Vault Card Bonus • Available in 190+ countries
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes marquee { 0% { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }
      `}</style>
    </div>
  );
}
