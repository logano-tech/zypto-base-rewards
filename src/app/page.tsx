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
      width: '100%',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px',
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* LOGO PIIRANG - Kasutame !important stiili asendust */}
      <div style={{ width: '80px', height: '80px', marginBottom: '20px' }}>
        <img 
          src="/icon.png" 
          alt="Logo" 
          style={{ 
            width: '80px', 
            height: '80px', 
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
        borderRadius: '32px', 
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        {step === 1 && (
          <div>
            <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '20px' }} />
            <h1 style={{ fontSize: '22px', margin: '20px 0', fontWeight: '900' }}>VERIFY WALLET</h1>
            <button 
              onClick={() => setStep(2)}
              style={{ width: '100%', padding: '16px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}
            >
              Check
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '20px' }} />
            <h1 style={{ color: '#84cc16', margin: '20px 0', fontSize: '28px' }}>VERIFIED!</h1>
            <button 
              onClick={() => setStep(3)}
              style={{ width: '100%', padding: '16px', backgroundColor: '#84cc16', color: 'black', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}
            >
              See Rewards
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '20px' }} />
            <button 
              onClick={() => handleLink(referralUrl)}
              style={{ width: '100%', padding: '16px', marginTop: '20px', background: 'linear-gradient(to right, #06b6d4, #84cc16)', color: 'black', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}
            >
              Claim Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
