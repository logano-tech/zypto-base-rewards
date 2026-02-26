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
        window.open(url, '_blank');
      }
    }
  };

  // Zypto brändivärvid
  const zyptoGreen = '#00ff88'; // See erkroheline, mis sulle meeldis

  return (
    <div style={{ 
      backgroundColor: '#050505', 
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
      
      {/* LOGO - Sujuvam asetus */}
      <div style={{ marginBottom: '24px', filter: 'drop-shadow(0 0 10px rgba(0,255,136,0.2))' }}>
        <img 
          src="/icon.png" 
          alt="Zypto Logo" 
          style={{ width: '80px', height: '80px', borderRadius: '20px', objectFit: 'contain' }} 
        />
      </div>

      <div style={{ 
        width: '100%', 
        maxWidth: '340px', 
        backgroundColor: '#111113', 
        padding: '20px', 
        borderRadius: '32px', 
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
      }}>
        
        {/* STEP 1: HOOK */}
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <img 
              src="/images/zypto-base-hook.png" 
              style={{ width: '100%', borderRadius: '20px', marginBottom: '8px' }} 
              alt="Hook"
            />
            <h1 style={{ fontSize: '22px', margin: '20px 0', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Verify Wallet
            </h1>
            <button 
              onClick={() => setStep(2)}
              style={{ 
                width: '100%', 
                padding: '16px', 
                backgroundColor: zyptoGreen, 
                color: 'black', 
                border: 'none', 
                borderRadius: '14px', 
                fontWeight: '800',
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                boxShadow: `0 4px 15px ${zyptoGreen}44`
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.96)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Check Rewards
            </button>
          </div>
        )}

        {/* STEP 2: VERIFIED */}
        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <img 
              src="/images/zypto-base-verified.png" 
              style={{ width: '100%', borderRadius: '20px', marginBottom: '8px' }} 
              alt="Verified"
            />
            <h1 style={{ color: zyptoGreen, margin: '20px 0', fontSize: '28px', fontWeight: '900', letterSpacing: '1px' }}>
              VERIFIED!
            </h1>
            <button 
              onClick={() => setStep(3)}
              style={{ 
                width: '100%', 
                padding: '16px', 
                backgroundColor: zyptoGreen, 
                color: 'black', 
                border: 'none', 
                borderRadius: '14px', 
                fontWeight: '800',
                fontSize: '18px',
                cursor: 'pointer',
                boxShadow: `0 4px 15px ${zyptoGreen}44`
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
              style={{ width: '100%', borderRadius: '20px', marginBottom: '8px' }} 
              alt="Perks"
            />
            <button 
              onClick={() => handleLink(referralUrl)}
              style={{ 
                width: '100%', 
                padding: '16px', 
                marginTop: '16px', 
                background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, 
                color: 'black', 
                border: 'none', 
                borderRadius: '14px', 
                fontWeight: '800',
                fontSize: '18px',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(6,182,212,0.3)'
              }}
            >
              Claim Rewards
            </button>
          </div>
        )}
      </div>

      {/* Lihtne CSS animatsioon sujuvaks ilmumiseks */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
