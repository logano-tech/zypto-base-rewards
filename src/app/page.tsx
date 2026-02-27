'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function ZyptoMiniApp() {
  const [step, setStep] = useState(1);
  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";
  const zyptoGreen = '#00ff88';

  useEffect(() => { sdk.actions.ready(); }, []);

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', padding: '16px' }}>
      
      {/* HEADER & AGENT PERSONA */}
      <header style={{ textAlign: 'center', marginBottom: '24px' }}>
        <img src="/icon.png" style={{ width: '50px', borderRadius: '12px' }} alt="Zypto" />
        <h1 style={{ fontSize: '22px', marginTop: '12px', fontWeight: '900' }}>Stop Bridging, Start Spending</h1>
        <p style={{ color: zyptoGreen, fontSize: '14px', fontStyle: 'italic' }}>
          "I'm using Zypto to pay for my life with Base yields. No middlemen." - Zyplink Agent
        </p>
      </header>

      {/* STEP 1: COMPARISON TABLE */}
      {step === 1 && (
        <div style={{ animation: 'fadeIn 0.5s' }}>
          <div style={{ backgroundColor: '#111', borderRadius: '16px', padding: '16px', marginBottom: '20px', border: '1px solid #222' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '12px', textAlign: 'center' }}>The Base Advantage</h3>
            <table style={{ width: '100%', fontSize: '12px', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333' }}>
                  <th style={{ padding: '8px' }}>Feature</th>
                  <th>Zypto</th>
                  <th>MetaMask</th>
                  <th>Coinbase</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #222' }}>
                  <td style={{ padding: '8px' }}>Non-Custodial</td>
                  <td>✅</td><td>✅</td><td>❌</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #222' }}>
                  <td style={{ padding: '8px' }}>Visa / Bill Pay</td>
                  <td>✅</td><td>❌</td><td>❌</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #222' }}>
                  <td style={{ padding: '8px' }}>Native Rewards</td>
                  <td>✅</td><td>❌</td><td>Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button onClick={() => setStep(2)} style={{ width: '100%', padding: '16px', backgroundColor: zyptoGreen, color: 'black', borderRadius: '12px', fontWeight: 'bold', border: 'none' }}>
            Check My $5 Bonus
          </button>
        </div>
      )}

      {/* STEP 2: SOCIAL PROOF / RECEIPTS */}
      {step === 2 && (
        <div style={{ animation: 'fadeIn 0.5s' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '16px' }}>Verified Utility</h3>
          
          <div style={{ marginBottom: '16px', backgroundColor: '#111', borderRadius: '12px', overflow: 'hidden' }}>
            <img src="/images/receipt-split.png" style={{ width: '100%' }} alt="Receipt" />
            <p style={{ padding: '12px', fontSize: '13px', color: '#ccc' }}>
              Load $10 using just $5 in crypto + your ZYP points. Low gas fees: <b>$0.20 on Base</b>.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href={referralUrl} target="_top" style={{ 
              display: 'block', textAlign: 'center', padding: '16px', background: zyptoGreen, 
              color: 'black', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none' 
            }}>
              Claim Your $5 Sign-up Bonus
            </a>
            
            <a href={referralUrl} target="_top" style={{ 
              display: 'block', textAlign: 'center', padding: '16px', background: 'transparent', 
              color: zyptoGreen, border: `2px solid ${zyptoGreen}`, borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none' 
            }}>
              Get Vault Key Card ($25 Bonus)
            </a>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
