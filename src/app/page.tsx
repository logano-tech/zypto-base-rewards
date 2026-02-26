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
    // Tekitame väikese "mõttepausi" (1.5 sekundit), et luua ootusärevust
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
      padding: '20px',
      color: 'white',
      overflow: 'hidden'
    }}>
      
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
        padding: '24px', 
        borderRadius: '32px', 
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
      }}>
        
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
              onClick={handleCheckRewards}
              disabled={isLoading}
              style={{ 
                width: '100%', 
                padding: '16px', 
                backgroundColor: isLoading ? '#1a1a1a' : zyptoGreen, 
                color: isLoading ? '#666' : 'black', 
                border: 'none', 
                borderRadius: '14px', 
                fontWeight: '800',
                fontSize: '18px',
                cursor: isLoading ? 'default' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isLoading ? 'none' : `0 4px 15px ${zyptoGreen}44`,
                position: 'relative'
              }}
            >
              {isLoading ? (
                <span className="loading-dots">Verifying</span>
              ) : (
                "Check Rewards"
              )}
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}>
            <img 
              src="/images/zypto-base-verified.png" 
              style={{ width: '100%', borderRadius: '20px', marginBottom: '8px' }} 
              alt="Verified"
            />
            <h1 style={{ color: zyptoGreen, margin: '20px 0', fontSize: '32px', fontWeight: '900', letterSpacing: '1px' }}>
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
                boxShadow: '0 10px 20px rgba(6,182,212,0.3)'
              }}
            >
              Claim Rewards
            </button>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 0.9; transform: scale(1.1); }
          80% { transform: scale(0.89); }
          100% { opacity: 1; transform: scale(1); }
        }
        .loading-dots:after {
          content: '.';
          animation: dots 1.5s steps(5, end) infinite;
        }
        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60% { content: '...'; }
          80%, 100% { content: ''; }
        }
      `}</style>
    </div>
  );
}
