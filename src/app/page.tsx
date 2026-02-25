'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function MiniApp() {
  // Alustame sammust 1 (Eligibility)
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
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-4 text-center justify-center font-sans">
      <div className="max-w-md w-full">
        
        {/* SAMM 1: CHECK ELIGIBILITY */}
        {step === 1 && (
          <div className="animate-in fade-in zoom-in duration-300">
            <img 
              src="/images/zypto-base-hook.png" 
              alt="Verify" 
              className="w-full rounded-3xl mb-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10" 
            />
            <h1 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">
              Verify Your Wallet
            </h1>
            <p className="text-zinc-400 mb-8 uppercase text-xs tracking-widest leading-relaxed">
              Unlock exclusive Zypto<br/>rewards on Base.
            </p>
            <button 
              onClick={() => setStep(2)}
              className="w-full bg-cyan-500 text-black font-black py-5 rounded-2xl text-xl uppercase shadow-lg shadow-cyan-500/20 active:scale-95 transition-transform"
            >
              Check Eligibility ➔
            </button>
          </div>
        )}

        {/* SAMM 2: VERIFIED */}
        {step === 2 && (
          <div className="animate-in slide-in-from-right duration-300">
            <img 
              src="/images/zypto-base-verified.png" 
              alt="Verified" 
              className="w-full rounded-3xl mb-8 border border-lime-500/20 shadow-2xl shadow-lime-500/10" 
            />
            <h2 className="text-lime-500 text-5xl font-black italic mb-2 uppercase tracking-tighter">
              Verified!
            </h2>
            <p className="text-zinc-400 mb-10 uppercase text-xs tracking-widest">
              Your rewards are ready
            </p>
            <button 
              onClick={() => setStep(3)}
              className="w-full bg-lime-500 text-black font-black py-5 rounded-2xl text-xl uppercase shadow-lg shadow-lime-500/20 active:scale-95 transition-transform"
            >
              View My Rewards ➔
            </button>
          </div>
        )}

        {/* SAMM 3: PERKS & CLAIM */}
        {step === 3 && (
          <div className="animate-in slide-in-from-right duration-300">
            <img 
              src="/images/zypto-base-perks.png" 
              alt="Perks" 
              className="w-full rounded-3xl mb-8 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10" 
            />
            <div className="space-y-4">
              <button 
                onClick={() => handleLink(referralUrl)}
                className="w-full bg-lime-500 text-black font-black py-5 rounded-2xl text-xl uppercase shadow-xl shadow-lime-500/30"
              >
                🚀 Claim $5 Bonus Now
              </button>
              <button 
                onClick={() => handleLink(cardsUrl)}
                className="w-full bg-transparent border-2 border-zinc-800 text-white font-bold py-4 rounded-2xl text-lg uppercase"
              >
                View Card Perks
              </button>
              <button 
                onClick={() => setStep(1)} 
                className="text-zinc-600 text-[10px] uppercase font-bold mt-4 tracking-widest"
              >
                ↺ Start Over
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
