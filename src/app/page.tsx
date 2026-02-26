'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function MiniApp() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleCheckRewards = () => {
    setIsLoading(true);
    // "Mõttepaus" ootusärevuse tekitamiseks
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleLink = (url: string) => {
    if (typeof window !== 'undefined') {
      if (sdk?.actions?.openUrl) {
        sdk.actions.openUrl(url);
      } else {
        window.open(url, '_blank');
      }
    }
  };

  const zyptoGreen = '#00ff88';

  return (
    <div style={{ 
      backgroundColor: '#050505', 
      minHeight: '100vh', 
      width: '100%',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '12px', // Vähendatud padding, et ekraanil rohkem ruumi oleks
      color: 'white',
      overflow: 'hidden'
    }}>
      
      {/* LOGO - Kompaktne, et mitte sisu alla suruda */}
      <div style={{ marginBottom: '16px', filter: 'drop-shadow(0 0 8px rgba(0,255,136,0.2))' }}>
        <img 
          src="/icon.png" 
          alt="Zypto Logo" 
          style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'contain' }} 
        />
      </div>

      {/* PEAMINE KONTEINER - Safe Area parandustega */}
      <div style={{ 
        width: '100%', 
        maxWidth: '300px', // KITSAM (oli 340px), et mahuks Warpcasti raamidesse
        backgroundColor: '#111113', 
        padding: '16px', 
        borderRadius: '28px', 
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
        margin: '0 auto'
      }}>
        
        {/* STEP 1: HOOK */}
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <img 
              src="/images/zypto-base-hook.png" 
              style={{ width: '100%', borderRadius: '18px', marginBottom: '4px' }} 
              alt="Hook"
            />
            <h1 style={{ fontSize: '18px', margin: '12px 0', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Verify Wallet
            </h1>
            <button 
              onClick={handleCheckRewards}
              disabled={isLoading}
              style={{ 
                width: '100%', 
                padding: '14px', 
                backgroundColor: isLoading ? '#1a1a1a' : zyptoGreen, 
                color: isLoading ? '#666' : 'black', 
                border: 'none', 
                borderRadius: '12px', 
                fontWeight: '800',
                fontSize: '16px', // Veidi väiksem font, et mahuks nupule ära
                cursor: isLoading ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isLoading ? 'none' : `0 4px 12px ${zyptoGreen}33`
              }}
            >
              {isLoading ? "Verifying..." : "Check Rewards"}
            </button>
          </div>
        )}

        {/* STEP 2: VERIFIED */}
        {step === 2 && (
          <div style={{ animation: 'bounceIn 0.6s ease-out' }}>
            <img 
              src="/images/zypto-base-verified.png" 
              style={{ width: '100%', borderRadius: '18px', marginBottom: '4px' }} 
              alt="Verified"
            />
            <h1 style={{ color: zyptoGreen, margin: '12px 0', fontSize: '24px', fontWeight: '900' }}>
              VERIFIED!
            </h1>
            <button 
              onClick={() => setStep(3)}
              style={{ 
                width: '100%', 
                padding: '14px', 
                backgroundColor: zyptoGreen, 
                color: 'black', 
                border: 'none', 
                borderRadius: '12px', 
                fontWeight: '800',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              See Rewards
            </button>
          </div>
        )}

        {/* STEP 3: CLAIM */}
        {step === 3 && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <img 
              src="/images/zypto-base-perks.png" 
              style={{ width: '100%', borderRadius: '18px', marginBottom: '4px' }} 
              alt="Perks"
            />
            <button 
              onClick={() => handleLink(referralUrl)}
              style={{ 
                width: '100%', 
                padding: '14px', 
                marginTop: '12px', 
                background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, 
                color: 'black', 
                border: 'none', 
                borderRadius: '12px', 
                fontWeight: '800',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Claim Rewards
            </button>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.8); }
          70% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
