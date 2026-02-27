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
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      
      <div style={{ marginBottom: '16px', textAlign: 'center' }}>
        <img src="/icon.png" alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '12px', boxShadow: '0 0 15px rgba(0,255,136,0.3)' }} />
      </div>

      <div style={{ 
        width: '100%', 
        maxWidth: '320px', 
        backgroundColor: '#111113', 
        padding: '24px 16px', 
        borderRadius: '28px', 
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
      }}>
        
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-hook.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '12px' }} />
            
            {/* UUED INTEGRATSIOONI MÄRGID */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px', fontSize: '10px', opacity: 0.8 }}>
               <span style={{ border: '1px solid #0052ff', color: '#0052ff', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>BASE 🔵</span>
               <span style={{ border: '1px solid #375bd2', color: '#375bd2', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>CHAINLINK ⛓️</span>
               <span style={{ border: '1px solid #24ae8f', color: '#24ae8f', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>KUCOIN 💎</span>
            </div>

            <h1 style={{ fontSize: '18px', margin: '0 0 8px 0', fontWeight: '900' }}>Verify for Rewards</h1>
            <p style={{ fontSize: '13px', color: '#aaa', marginBottom: '20px', lineHeight: '1.4' }}>
              Explore KuCoin Pay & Chainlink CCIP integrations on Base.
            </p>

            <button 
              onClick={handleCheckRewards}
              disabled={isLoading}
              style={{ 
                width: '100%', padding: '16px', backgroundColor: isLoading ? '#1a1a1a' : zyptoGreen, 
                color: 'black', border: 'none', borderRadius: '14px', fontWeight: '900', fontSize: '16px', cursor: 'pointer'
              }}
            >
              {isLoading ? "Verifying..." : "Check Eligibility"}
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.4s' }}>
            <img src="/images/zypto-base-verified.png" style={{ width: '100%', borderRadius: '16px', marginBottom: '8px' }} />
            <h1 style={{ color: zyptoGreen, margin: '14px 0', fontSize: '24px', fontWeight: '900' }}>VERIFIED!</h1>
            <p style={{ fontSize: '14px', color: '#ccc', marginBottom: '20px' }}>Your wallet is eligible for launch perks.</p>
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
            <h2 style={{ fontSize: '16px', marginBottom: '16px' }}>Claim your Launch Pack</h2>
            
            <a 
              href={referralUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'block',
                width: '100%', 
                padding: '16px 0', 
                background: `linear-gradient(135deg, #06b6d4, ${zyptoGreen})`, 
                color: 'black', 
                textDecoration: 'none',
                borderRadius: '14px', 
                fontWeight: '900',
                fontSize: '18px',
                boxShadow: '0 8px 20px rgba(0,255,136,0.3)'
              }}
            >
              Claim Rewards
            </a>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
