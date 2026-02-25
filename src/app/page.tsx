'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function MiniApp() {
  const [step, setStep] = useState(1);
  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleLink = (url: string) => {
    if (typeof window !== 'undefined') {
      if (sdk?.actions?.openUrl) {
        sdk.actions.openUrl(url);
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <div style={{ 
      backgroundColor: 'black', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      {/* LOGO - Brutaalne piirang */}
<div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '20px' }}>
  <img 
    src="/icon.png" 
    alt="Logo" 
    style={{ 
      width: '80px', 
      height: '80px', 
      minWidth: '80px', 
      maxWidth: '80px', 
      borderRadius: '16px',
      objectFit: 'contain'
    }} 
  />
</div>
        <div style={{ 
        width: '100%', 
        maxWidth: '350px', 
        backgroundColor: '#18181b', 
        padding: '20px', 
        borderRadius: '24px', 
        textAlign: 'center',
        border: '1px solid #27272a'
      }}>
        {step === 1 && (
          <div>
            <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '16px' }} />
            <h1 style={{ fontSize: '20px', margin: '15px 0' }}>Verify Wallet</h1>
            <button 
              onClick={() => setStep(2)}
              style={{ width: '100%', padding: '15px', backgroundColor: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}
            >
              Check Eligibility
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '16px' }} />
            <h1 style={{ color: '#84cc16', margin: '15px 0' }}>Verified!</h1>
            <button 
              onClick={() => setStep(3)}
              style={{ width: '100%', padding: '15px', backgroundColor: '#84cc16', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}
            >
              See Rewards
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '16px' }} />
            <button 
              onClick={() => handleLink(referralUrl)}
              style={{ width: '100%', padding: '15px', marginTop: '15px', background: 'linear-gradient(to right, #06b6d4, #84cc16)', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}
            >
              Claim Bonus Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
