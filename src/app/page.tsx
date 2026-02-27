'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function ZyptoMiniApp() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";
  const zyptoGreen = '#00ff88';

  useEffect(() => { sdk.actions.ready(); }, []);

  const handleVerify = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* HEADER */}
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src="/icon.png" style={{ width: '45px', borderRadius: '12px', marginBottom: '10px' }} alt="Zypto" />
        <h1 style={{ fontSize: '20px', fontWeight: '900', margin: '0' }}>Stop Bridging, Start Spending</h1>
        <p style={{ color: zyptoGreen, fontSize: '13px', fontStyle: 'italic', marginTop: '5px' }}>
          "I use Zypto to pay for daily life with Base yields." - Zyplink Agent
        </p>
      </header>

      <div style={{ width: '100%', maxWidth: '340px', backgroundColor: '#111113', padding: '20px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
        
        {/* SCREEN 1: VÕRDLUSTABEL */}
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '16px', fontSize: '9px' }}>
               <span style={{ border: '1px solid #0052ff', color: '#0052ff', padding: '2px 5px', borderRadius: '4px', fontWeight: 'bold' }}>BASE 🔵</span>
               <span style={{ border: '1px solid #375bd2', color: '#375bd2', padding: '2px 5px', borderRadius: '4px', fontWeight: 'bold' }}>CHAINLINK ⛓️</span>
               <span style={{ border: '1px solid #24ae8f', color: '#24ae8f', padding: '2px 5px', borderRadius: '4px', fontWeight: 'bold' }}>KUCOIN 💎</span>
            </div>

            <div style={{ backgroundColor: '#000', borderRadius: '12px', padding: '12px', marginBottom: '16px', border: '1px solid #222' }}>
              <table style={{ width: '100%', fontSize: '11px', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #333', opacity: 0.6 }}>
                    <th style={{ paddingBottom: '8px' }}>Feature</th>
                    <th>Zypto</th>
                    <th>Others</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #111' }}><td style={{ padding: '6px 0' }}>Non-Custodial</td><td>✅</td><td>✅</td></tr>
                  <tr style={{ borderBottom: '1px solid #111' }}><td style={{ padding: '6px 0' }}>Visa / Bill Pay</td><td>✅</td><td>❌</td></tr>
                  <tr><td style={{ padding: '6px 0' }}>Native Rewards</td><td>✅</td><td>❌</td></tr>
                </tbody>
              </table>
            </div>

            <button onClick={handleVerify} disabled={isLoading} style={{ width: '100%', padding: '16px', backgroundColor: isLoading ? '#1a1a1a' : zyptoGreen, color: 'black', borderRadius: '14px', fontWeight: '900', border: 'none', cursor: 'pointer' }}>
              {isLoading ? "Verifying..." : "Check Your $5 Bonus"}
            </button>
          </div>
        )}

        {/* SCREEN 2: SPEND OPTIONS + VERIFIED UTILITY */}
        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-spend-options.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '12px' }} alt="Spend Options" />
            
            <div style={{ padding: '10px', backgroundColor: '#000', borderRadius: '12px', border: '1px solid #222', marginBottom: '16px', fontSize: '11px' }}>
              <b style={{ color: 'white' }}>Verified Utility:</b> Load $10 using just $5 in crypto + ZYP points.
              <br/><span style={{ color: zyptoGreen }}>Gas fees: $0.20 on Base.</span>
            </div>

            <button onClick={() => setStep(3)} style={{ width: '100%', padding: '14px', backgroundColor: zyptoGreen, color: 'black', borderRadius: '12px', fontWeight: '800', border: 'none', cursor: 'pointer' }}>
              See Reward Options
            </button>
          </div>
        )}

        {/* SCREEN 3: CLAIM BUTTONS */}
        {step === 3 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '16px' }} alt="Perks" />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href={referralUrl} target="_top" style={{ 
                display: 'block', textAlign: 'center', padding: '16px', background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, 
                color: 'black', borderRadius: '12px', fontWeight: '900', textDecoration: 'none', fontSize: '16px'
              }}>
                Claim $5 Sign-up Bonus
              </a>
              
              <a href={referralUrl} target="_top" style={{ 
                display: 'block', textAlign: 'center', padding: '14px', background: 'transparent', 
                color: zyptoGreen, border: `2px solid ${zyptoGreen}`, borderRadius: '12px', fontWeight: '800', textDecoration: 'none', fontSize: '14px'
              }}>
                Get Vault Key Card ($25)
              </a>
            </div>
            <p style={{ fontSize: '10px', textAlign: 'center', marginTop: '12px', opacity: 0.5 }}>
              Referral code: VMvrJEHIvPb applied.
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
