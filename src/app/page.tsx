'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function ZyptoMiniApp() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";
  const zyptoGreen = '#00ff88';

  useEffect(() => { 
    // SDK ready kutse vastavalt uuele standardile
    sdk.actions.ready(); 
  }, []);

  const handleCheckRewards = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      <div style={{ marginBottom: '20px' }}>
        <img src="/icon.png" style={{ width: '55px', borderRadius: '14px' }} alt="Logo" />
      </div>

      <div style={{ width: '100%', maxWidth: '330px', backgroundColor: '#111113', padding: '24px', borderRadius: '28px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
        
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '16px' }} />
            <button onClick={handleCheckRewards} disabled={isLoading} style={{ width: '100%', padding: '16px', backgroundColor: isLoading ? '#1a1a1a' : zyptoGreen, color: 'black', borderRadius: '14px', fontWeight: '900', border: 'none', cursor: 'pointer', fontSize: '17px' }}>
              {isLoading ? "Verifying..." : "Check Rewards"}
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '8px' }} />
            <h1 style={{ color: zyptoGreen, fontSize: '26px', fontWeight: '900', margin: '18px 0' }}>VERIFIED!</h1>
            <button onClick={() => setStep(3)} style={{ width: '100%', padding: '16px', backgroundColor: zyptoGreen, color: 'black', borderRadius: '14px', fontWeight: '900', border: 'none', cursor: 'pointer' }}>
              See Rewards
            </button>
          </div>
        )}

        {step === 3 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '20px' }} />
            <a href={referralUrl} target="_top" style={{ display: 'block', textAlign: 'center', padding: '18px', background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, color: 'black', borderRadius: '14px', fontWeight: '900', textDecoration: 'none', fontSize: '18px' }}>
              Claim Rewards
            </a>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
