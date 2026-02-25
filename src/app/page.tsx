'use client';

import { useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function LandingPage() {
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
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      {/* PARANDATUD: Kasutame õiget failinime ja laiendit .png */}
      <img 
        src="/images/zypto-base-verified.png" 
        alt="Verified"
        className="w-full max-w-md rounded-2xl mb-8 border border-lime-500/20" 
      />
      
      <h2 className="text-lime-500 text-5xl font-black italic mb-2 tracking-tighter uppercase leading-none">
        Verified!
      </h2>
      <p className="text-zinc-400 mb-10 uppercase tracking-widest text-xs">
        Your rewards are ready to claim
      </p>

      <div className="w-full max-w-xs space-y-4">
        <button 
          onClick={() => handleLink(referralUrl)}
          className="w-full bg-lime-500 text-black font-black py-5 rounded-2xl text-2xl uppercase shadow-lg shadow-lime-500/20 active:scale-95 transition-transform"
        >
          🚀 Claim & Download
        </button>

        <button 
          onClick={() => handleLink(cardsUrl)}
          className="w-full bg-transparent border-2 border-zinc-800 text-white font-bold py-4 rounded-2xl text-lg uppercase active:scale-95 transition-transform"
        >
          View Card Perks
        </button>
      </div>
    </main>
  );
}
