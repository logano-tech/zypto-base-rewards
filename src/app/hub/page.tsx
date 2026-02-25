'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function HubPage() {
  const [context, setContext] = useState<any>(null);

  useEffect(() => {
    const init = async () => {
      const ctx = await sdk.context;
      setContext(ctx);
      sdk.actions.ready();
    };
    init();
  }, []);

  const handleLink = (url: string) => {
    try {
      if (sdk?.actions?.openUrl) {
        sdk.actions.openUrl(url);
      } else {
        // Jõuline suunamine, kui SDK ei reageeri
        window.location.href = url;
      }
    } catch (e) {
      window.location.assign(url);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6 text-center">
      <h1 className="text-cyan-400 text-2xl font-black mt-8 mb-2 uppercase italic tracking-tighter">
        Unlock your $5 Base spending bonus
      </h1>
      <p className="text-zinc-500 text-xs mb-10 uppercase font-bold">Stop Bridging. Spend USDC/ETH IRL.</p>

      <div className="bg-zinc-900/50 border border-lime-500/30 rounded-[2.5rem] p-8 mb-10 w-full max-w-sm relative">
        <div className="absolute -top-3 right-6 bg-lime-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">
          On-Chain Verified
        </div>
        <h2 className="text-lime-500 text-5xl font-black italic mb-4 tracking-tighter">VERIFIED!</h2>
        <p className="text-sm mb-6 px-4">Your Farcaster + Base wallet is eligible for **$5 ZYP bonus** + non-custodial Visa card.</p>
        <p className="text-cyan-500 text-[10px] font-mono">Hey @{context?.user?.username || 'degen'}, stop bridging. Spend Base yields IRL.</p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <button 
          onClick={() => handleLink("https://ref.zypto.com/VMvrJEHIvPb")}
          className="w-full bg-lime-500 text-black font-black py-5 rounded-2xl text-xl uppercase shadow-lg shadow-lime-500/20"
        >
          🚀 Claim $5 Bonus Now
        </button>
        <button 
          onClick={() => handleLink("https://zypto.com/visa-cards/")}
          className="w-full bg-black border-2 border-zinc-800 text-white font-black py-4 rounded-2xl text-lg uppercase"
        >
          View Card Perks
        </button>
      </div>
    </main>
  );
}
