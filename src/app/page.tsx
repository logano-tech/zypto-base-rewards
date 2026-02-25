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
    <main className="fixed inset-0 bg-[#050505] text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center gap-6 animate-in fade-in duration-700">
        
        {/* LOGO - See on nüüd väike ja kontrollitud */}
        <div className="w-16 h-16 flex-shrink-0">
          <img 
            src="/icon.png" 
            alt="Zypto" 
            className="w-full h-full rounded-2xl shadow-lg shadow-lime-500/10 object-contain" 
          />
        </div>

        {/* SISU KONTEINER */}
        <div className="w-full bg-zinc-900/20 border border-white/5 rounded-[2.5rem] p-4 backdrop-blur-sm">
          
          {/* SAMM 1: ELIGIBILITY */}
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <img 
                src="/images/zypto-base-hook.png" 
                alt="Verify" 
                className="w-full rounded-[1.8rem] border border-white/5" 
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-black tracking-tighter uppercase italic leading-none">
                  Verify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">Wallet</span>
                </h1>
                <p className="text-zinc-500 uppercase text-[9px] tracking-[0.3em] font-bold">
                  Unlock exclusive Zypto rewards on Base
                </p>
              </div>
              <button 
                onClick={() => setStep(2)}
                className="w-full py-5 bg-white text-black font-black rounded-2xl text-lg uppercase active:scale-95 transition-all shadow-xl"
              >
                Check Eligibility →
              </button>
            </div>
          )}

          {/* SAMM 2: VERIFIED */}
          {step === 2 && (
            <div className="space-y-6 animate-in zoom-in duration-500">
              <img 
                src="/images/zypto-base-verified.png" 
                alt="Verified" 
                className="w-full rounded-[1.8rem] border border-lime-500/20" 
              />
              <div className="space-y-1">
                <h2 className="text-lime-500 text-5xl font-black italic tracking-tighter uppercase leading-none">
                  Verified!
                </h2>
                <p className="text-zinc-400 uppercase text-[9px] tracking-widest font-bold">
                  Your rewards are ready
                </p>
              </div>
              <button 
                onClick={() => setStep(3)}
                className="w-full bg-lime-500 text-black font-black py-5 rounded-2xl text-lg uppercase shadow-lg shadow-lime-500/20 active:scale-95 transition-all"
              >
                View My Rewards
              </button>
            </div>
          )}

          {/* SAMM 3: PERKS */}
          {step === 3 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
              <img 
                src="/images/zypto-base-perks.png" 
                alt="Perks" 
                className="w-full rounded-[1.8rem] border border-cyan-500/10" 
              />
              <div className="grid gap-3 pt-2">
                <button 
                  onClick={() => handleLink(referralUrl)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-lime-500 p-[1px] rounded-2xl active:scale-95 transition-all"
                >
                  <div className="bg-black hover:bg-transparent transition-colors rounded-[calc(1rem-1px)] py-4 font-black text-lg uppercase">
                    🚀 Claim Rewards Now
                  </div>
                </button>
                <button 
                  onClick={() => handleLink(cardsUrl)}
                  className="w-full bg-white/5 border border-white/10 text-white font-bold py-4 rounded-2xl text-base uppercase"
                >
                  View Card Perks
                </button>
              </div>
            </div>
          )}
        </div>

        {/* JALUS */}
        <button 
          onClick={() => setStep(1)} 
          className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest hover:text-zinc-400 transition-colors"
        >
          ↺ Start Over
        </button>
      </div>
    </main>
  );
}
