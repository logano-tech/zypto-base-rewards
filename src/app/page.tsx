'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function ZyptoMiniApp() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";
  const zyptoGreen = '#00ff88';

  useEffect(() => { sdk.actions.ready(); }, []);

  const handleCheckRewards = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      
      <div style={{ marginBottom: '16px' }}>
        <img src="/icon.png" style={{ width: '50px', borderRadius: '12px' }} alt="Logo" />
      </div>

      <div style={{ width: '100%', maxWidth: '320px', backgroundColor: '#111113', padding: '20px', borderRadius: '28px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
        
        {/* STEP 1: HOOK (ALGNE) */}
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '12px' }} />
            
            <button onClick={handleCheckRewards} disabled={isLoading} style={{ width: '100%', padding: '16px', backgroundColor: isLoading ? '#1a1a1a' : zyptoGreen, color: 'black', borderRadius: '12px', fontWeight: '900', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
              {isLoading ? "Verifying..." : "Check Rewards"}
            </button>

            {/* LISAD: Peidetud nupu alla, et mitte segada */}
            <button onClick={() => setShowDetails(!showDetails)} style={{ background: 'none', border: 'none', color: '#666', fontSize: '12px', marginTop: '15px', cursor: 'pointer', textDecoration: 'underline' }}>
              {showDetails ? "Hide Details" : "Why Zypto? (Comparison)"}
            </button>

            {showDetails && (
              <div style={{ marginTop: '15px', fontSize: '11px', textAlign: 'left', backgroundColor: '#000', padding: '10px', borderRadius: '8px', animation: 'fadeIn 0.3s' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tr style={{ borderBottom: '1px solid #222' }}><td style={{ padding: '4px' }}>Non-Custodial</td><td>✅</td></tr>
                  <tr style={{ borderBottom: '1px solid #222' }}><td style={{ padding: '4px' }}>Visa/Bill Pay</td><td>✅</td></tr>
                  <tr><td style={{ padding: '4px' }}>Base Rewards</td><td>✅</td></tr>
                </table>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: VERIFIED (ALGNE) */}
        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '8px' }} />
            <h1 style={{ color: zyptoGreen, fontSize: '24px', fontWeight: '900', margin: '15px 0' }}>VERIFIED!</h1>
            <button onClick={() => setStep(3)} style={{ width: '100%', padding: '16px', backgroundColor: zyptoGreen, color: 'black', borderRadius: '12px', fontWeight: '800', border: 'none', cursor: 'pointer' }}>
              See Rewards
            </button>
          </div>
        )}

        {/* STEP 3: CLAIM (ALGNE) */}
        {step === 3 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '16px' }} />
            <a href={referralUrl} target="_top" style={{ display: 'block', textAlign: 'center', padding: '16px', background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, color: 'black', borderRadius: '12px', fontWeight: '900', textDecoration: 'none', fontSize: '18px' }}>
              Claim Rewards
            </a>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
