'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function MiniApp() {
  const [step, setStep] = useState(1);
  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";
  const cardsUrl = "https://zypto.com/personal/crypto-cards/";

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
    <main style={{ 
      position: 'fixed', 
      inset: 0, 
      backgroundColor: 'black', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px' 
    }}>
      <div style={{ width: '100%', maxWidth: '360px', textAlign: 'center' }}>
        
        {/* LOGO - Otse määratud laius takistab "hiiglase" efekti */}
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/icon.png" 
            alt="Zypto" 
            style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'contain' }} 
          />
        </div>

        {/* SISU RAAM */}
        <div style={{ 
          backgroundColor: 'rgba(39, 39, 42, 0.3)', 
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRadius: '32px', 
          padding: '24px' 
        }}>
          
          {step === 1 && (
            <div className="animate-in fade-in duration-500">
              <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '24px' }} />
              <h1 style={{ fontSize: '24px', fontWeight: '900', marginTop: '20px', textTransform: 'uppercase' }}>
                Verify <span style={{ color: '#84cc16' }}>Wallet</span>
              </h1>
              <button 
                onClick={() => setStep(2)}
                style={{ width: '100%', padding: '16px', backgroundColor: 'white', color: 'black', borderRadius: '12px', fontWeight: 'bold', marginTop: '20px', border: 'none', cursor: 'pointer' }}
              >
                Check Eligibility →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in zoom-in duration-500">
              <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '24px' }} />
              <h2 style={{ fontSize: '32px', color: '#84cc16', fontWeight: '900', marginTop: '20px' }}>VERIFIED!</h2>
              <button 
                onClick={() => setStep(3)}
                style={{ width: '100%', padding: '16px', backgroundColor: '#84cc16', color: 'black', borderRadius: '12px', fontWeight: 'bold', marginTop: '20px', border: 'none' }}
              >
                View Rewards
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in slide-in-from-right duration-500">
              <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '24px' }} />
              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button 
                  onClick={() => handleLink(referralUrl)}
                  style={{ width: '100%', padding: '16px', background: 'linear-gradient(to right, #06b6d4, #84cc16)', color: 'black', borderRadius: '12px', fontWeight: 'bold', border: 'none' }}
                >
                  🚀 Claim Now
                </button>
                <button 
                  onClick={() => handleLink(cardsUrl)}
                  style={{ width: '100%', padding: '12px', backgroundColor: 'transparent', color: 'white', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  View Card Perks
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
