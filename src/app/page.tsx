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
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
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
        padding: '20px 16px', 
        borderRadius: '28px', 
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.08)'
      }}>
        
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '6px' }} />
            <h1 style={{ fontSize: '18px', margin: '14px 0', fontWeight: '900' }}>Verify Wallet</h1>
            <button 
              onClick={handleCheckRewards}
              disabled={isLoading}
              style={{ 
                width: '100%', padding: '14px', backgroundColor: isLoading ? '#1a1a1a' : zyptoGreen, 
                color: 'black', border: 'none', borderRadius: '12px', fontWeight: '800', fontSize: '16px'
              }}
            >
              {isLoading ? "Verifying..." : "Check Rewards"}
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: 'bounceIn 0.6s ease-out' }}>
            <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '6px' }} />
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
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <img src="/images/zypto-base-perks.png" style={{ width: '100%', borderRadius: '18px', marginBottom: '6px' }} />
            
            {/* KRIITILINE MUUDATUS: Kasutame puhast HTML linki, mis on maskeeritud nupuks */}
            <a 
              href={referralUrl}
              target="_top"
              rel="noopener noreferrer"
              onClick={(e) => {
                // Kui oleme Farcasteris, proovime ikka SDK-d esimesena
                if (sdk?.actions?.openUrl) {
                  e.preventDefault();
                  sdk.actions.openUrl(referralUrl);
                }
              }}
              style={{ 
                display: 'block',
                width: '100%', 
                padding: '16px 0', 
                marginTop: '12px', 
                background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, 
                color: 'black', 
                textDecoration: 'none',
                borderRadius: '12px', 
                fontWeight: '800',
                fontSize: '16px',
                boxShadow: '0 6px 15px rgba(0,255,136,0.3)'
              }}
            >
              Claim Rewards
            </a>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounceIn { 0% { opacity: 0; transform: scale(0.8); } 70% { transform: scale(1.05); } 100% { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}
