'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function MiniApp() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";

  useEffect(() => {
      if (window.Telegram?.WebApp) {
    window.Telegram.WebApp.expand(); // Teeb äpi kohe suureks
    window.Telegram.WebApp.ready();
  }
  sdk.actions.ready();
  }, []);

  const handleCheckRewards = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1200);
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
      padding: '12px',
      color: 'white',
      overflow: 'hidden'
    }}>
      
      <div style={{ marginBottom: '16px' }}>
        <img src="/icon.png" alt="Logo" style={{ width: '60px', height: '60px', borderRadius: '14px' }} />
      </div>

      <div style={{ 
        width: '100%', 
        maxWidth: '300px', 
        backgroundColor: '#111113', 
        padding: '24px 16px', 
        borderRadius: '28px', 
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
        
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '8px' }} />
            <h1 style={{ fontSize: '18px', margin: '14px 0', fontWeight: '900' }}>Verify Wallet</h1>
            <button 
              onClick={handleCheckRewards}
              disabled={isLoading}
              style={{ 
                width: '100%', padding: '14px', backgroundColor: isLoading ? '#1a1a1a' : zyptoGreen, 
                color: 'black', border: 'none', borderRadius: '12px', fontWeight: '800'
              }}
            >
              {isLoading ? "Verifying..." : "Check Rewards"}
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '8px' }} />
            <h1 style={{ color: zyptoGreen, margin: '14px 0', fontSize: '24px', fontWeight: '900' }}>VERIFIED!</h1>
            <button 
              onClick={() => setStep(3)}
              style={{ width: '100%', padding: '14px', backgroundColor: zyptoGreen, color: 'black', border: 'none', borderRadius: '12px', fontWeight: '800' }}
            >
              See Rewards
            </button>
          </div>
        )}

        {step === 3 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '18px', marginBottom: '8px' }} />
            
            {/* SEE ON KRIITILINE: Me ei kasuta onClick-i, vaid puhast a-tagi */}
            <a 
              href={referralUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'block',
                width: '100%', 
                padding: '16px 0', 
                marginTop: '16px', 
                background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, 
                color: 'black', 
                textDecoration: 'none',
                borderRadius: '12px', 
                fontWeight: '900',
                fontSize: '18px',
                boxShadow: '0 8px 20px rgba(0,255,136,0.3)',
                WebkitAppearance: 'none' // iOS/Twitteri sisevaate jaoks
              }}
            >
              Claim Rewards
            </a>
            
            <p style={{ fontSize: '10px', color: '#666', marginTop: '12px' }}>
              If link doesn't open, tap and hold to copy.
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
