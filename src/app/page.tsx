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
      padding: '16px', // Vähendatud sisu koomaletõmbamiseks
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* LOGO - Fikseeritud suurus */}
      <div style={{ width: '80px', height: '80px', marginBottom: '16px' }}>
        <img 
          src="/icon.png" 
          alt="Logo" 
          style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'contain' }} 
        />
      </div>

      <div style={{ 
        width: '100%', 
        maxWidth: '320px', // Kitsam, et mahuks raamidesse
        backgroundColor: '#18181b', 
        padding: '16px', 
        borderRadius: '28px', 
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        {step === 1 && (
          <div className="animate-in fade-in duration-500">
            <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '18px' }} />
            <h1 style={{ fontSize: '20px', margin: '16px 0', fontWeight: '900', textTransform: 'uppercase' }}>Verify Wallet</h1>
            <button 
              onClick={() => setStep(2)}
              style={{ width: '100%', padding: '14px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}
            >
              Check
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in zoom-in duration-500">
            <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '18px' }} />
            <h1 style={{ color: '#84cc16', margin: '16px 0', fontSize: '26px', fontWeight: '900' }}>VERIFIED!</h1>
            <button 
              onClick={() => setStep(3)}
              style={{ width: '100%', padding: '14px', backgroundColor: '#84cc16', color: 'black', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}
            >
              See Rewards
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in slide-in-from-right duration-500">
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '18px' }} />
            <button 
              onClick={() => handleLink(referralUrl)}
              style={{ width: '100%', padding: '14px', marginTop: '16px', background: 'linear-gradient(to right, #06b6d4, #84cc16)', color: 'black', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}
            >
              Claim Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
