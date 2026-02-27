'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function MiniApp() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<null | 'why' | 'calc' | 'community'>(null);
  
  // Calculator variables - focused on referral/passive income
  const [numReferrals, setNumReferrals] = useState(5);
  const [refVolume, setRefVolume] = useState(10000);
  const [numVKC, setNumVKC] = useState(2);

  // Gamification Data - Manual updates based on your dashboard
  const alphaBoard = [
    { wallet: '0x...eed0', task: '👑 Zypto King', status: 'Verified' },
    { wallet: '0x...4a2b', task: '🏦 Bill Slayer', status: 'Verified' },
    { wallet: '0x...99cf', task: '💳 Card Loader', status: 'Verified' },
    { wallet: '0x...1122', task: '💳 Card Loader', status: 'Verified' },
    { wallet: '0x...ff7a', task: '🆕 Newbie', status: 'Verified' },
  ];

  const communityGoal = { current: 64200, target: 100000 };
  const progressPercent = (communityGoal.current / communityGoal.target) * 100;

  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";
  const telegramBotUrl = "https://t.me/ZyptoRewardsBot/rewards"; 
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

  // Logic based on marketing strategy [cite: 4, 5, 6]
  const welcomeBonusTotal = numReferrals * 5; // $5 per referral
  const swapComm = refVolume * 0.001; // 0.1% commission
  const vkcBonus = numVKC * 25; // $25 per VKC referral
  
  const totalMonthlyPassive = (welcomeBonusTotal + swapComm + vkcBonus).toFixed(0);

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
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '16px' }}>
              <button onClick={() => setActiveOverlay('why')} style={{ padding: '10px', fontSize: '11px', fontWeight: '700', background: 'rgba(255,255,255,0.03)', color: 'white', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', cursor: 'pointer' }}>Why Zypto?</button>
              <button onClick={() => setActiveOverlay('calc')} style={{ padding: '10px', fontSize: '11px', fontWeight: '700', background: 'rgba(255,255,255,0.03)', color: 'white', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', cursor: 'pointer' }}>Earn Calc</button>
              <button onClick={() => setActiveOverlay('community')} style={{ gridColumn: 'span 2', padding: '10px', fontSize: '11px', fontWeight: '700', background: 'rgba(0, 255, 136, 0.05)', color: zyptoGreen, border: '1px solid rgba(0, 255, 136, 0.2)', borderRadius: '10px', cursor: 'pointer' }}>🏆 Community Alpha Board</button>
            </div>
          </div>
        )}
      </div>

      {/* MODAL OVERLAYS */}
      {activeOverlay && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', animation: 'fadeIn 0.2s' }}>
          <div style={{ backgroundColor: '#111113', width: '100%', maxWidth: '320px', borderRadius: '28px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
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
                <h2 style={{ fontSize: '20px', marginBottom: '8px', fontWeight: '900', color: zyptoGreen }}>Referral Rewards</h2>
                <p style={{ fontSize: '11px', color: '#888', marginBottom: '15px' }}>Estimate your monthly passive income</p>
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '11px', color: '#888' }}>Active Referrals: <b>{numReferrals}</b></label>
                  <input type="range" min="1" max="50" value={numReferrals} onChange={(e) => setNumReferrals(Number(e.target.value))} style={{ width: '100%', accentColor: zyptoGreen, display: 'block' }} />
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '11px', color: '#888' }}>Referral Swap Volume: <b>${refVolume.toLocaleString()}</b></label>
                  <input type="range" min="1000" max="200000" step="1000" value={refVolume} onChange={(e) => setRefVolume(Number(e.target.value))} style={{ width: '100%', accentColor: zyptoGreen, display: 'block' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ fontSize: '11px', color: '#888' }}>VKC Referrals: <b>{numVKC}</b></label>
                  <input type="range" min="0" max="10" value={numVKC} onChange={(e) => setNumVKC(Number(e.target.value))} style={{ width: '100%', accentColor: zyptoGreen, display: 'block' }} />
                </div>
                <div style={{ backgroundColor: 'rgba(0,255,136,0.06)', padding: '12px', borderRadius: '16px', border: '1px solid rgba(0,255,136,0.15)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}><span>Sign-up Bonuses ($5)</span><span>${welcomeBonusTotal}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}><span>Swap Commissions (0.1%)</span><span>${swapComm}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '6px', marginBottom: '8px' }}><span>VKC Bonuses ($25)</span><span>${vkcBonus}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontWeight: '800', fontSize: '13px' }}>Total Referral Income</span><span style={{ fontWeight: '900', color: zyptoGreen, fontSize: '20px' }}>${totalMonthlyPassive}</span></div>
                </div>
                <div style={{ marginTop: '16px', textAlign: 'center', padding: '10px', border: '1px dashed rgba(6, 182, 212, 0.3)', borderRadius: '12px', backgroundColor: 'rgba(6, 182, 212, 0.03)' }}>
                  <p style={{ fontSize: '11px', margin: 0, color: '#06b6d4', fontWeight: '700', lineHeight: '1.4' }}>✨ Plus ZYPsBack rewards from your own personal transactions & spending!</p>
                </div>
              </div>
            )}

            {activeOverlay === 'community' && (
              <div style={{ textAlign: 'left' }}>
                <h2 style={{ fontSize: '20px', marginBottom: '8px', fontWeight: '900', color: zyptoGreen }}>Weekly Alpha Board</h2>
                <p style={{ fontSize: '11px', color: '#888', marginBottom: '15px' }}>Top 5 Zypto Friends this week</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {alphaBoard.map((user, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div>
                        <div style={{ fontSize: '12px', fontWeight: '800' }}>{user.wallet}</div>
                        <div style={{ fontSize: '10px', color: zyptoGreen }}>{user.task}</div>
                      </div>
                      <div style={{ fontSize: '9px', background: 'rgba(0,255,136,0.1)', color: zyptoGreen, padding: '4px 8px', borderRadius: '20px', fontWeight: '900' }}>{user.status}</div>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px' }}>
                    <span style={{ fontWeight: '800' }}>Monthly Goal: 100k ZYPs</span>
                    <span style={{ color: zyptoGreen }}>{progressPercent.toFixed(0)}%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: `${progressPercent}%`, height: '100%', background: `linear-gradient(90deg, #06b6d4, ${zyptoGreen})`, borderRadius: '10px', transition: 'width 1s ease-in-out' }}></div>
                  </div>
                  <p style={{ fontSize: '9px', color: '#666', marginTop: '6px', textAlign: 'center' }}>🎯 Reach 100% to unlock a $25 $ZYPTO raffle!</p>
                </div>

                {/* BOT LINK */}
                <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '14px', textAlign: 'center', background: 'white', color: 'black', borderRadius: '12px', textDecoration: 'none', fontWeight: '900', fontSize: '13px' }}>
                  📸 Launch Rewards Bot
                </a>
                <p style={{ fontSize: '9px', color: '#555', marginTop: '8px', textAlign: 'center' }}>Send spend screenshot to the bot to get verified</p>
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
