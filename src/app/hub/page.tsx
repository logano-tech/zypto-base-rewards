'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function HubPage() {
  const [isSdkReady, setIsSdkReady] = useState(false);
  const [context, setContext] = useState<any>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const ctx = await sdk.context;
        setContext(ctx);
        sdk.actions.ready();
        setIsSdkReady(true);
      } catch (error) {
        console.error("SDK laadimine ebaõnnestus", error);
      }
    };
    init();
  }, []);

  // Funktsioon väliste linkide avamiseks Farcasteri sees
  const openLink = (url: string) => {
    if (typeof window !== 'undefined' && sdk?.actions?.openUrl) {
      sdk.actions.ready(); // Kindlustame, et SDK on aktiivne
      sdk.actions.openUrl(url);
    } else {
      window.open(url, "_blank");
    }
  };

  if (!isSdkReady) {
    return <div className="min-h-screen bg-black" />; // Tühi laadimisvaade
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6 font-sans">
      <div className="max-w-md w-full text-center mt-8">
        {/* LOGO JA PEALKIRI */}
        <img src="/icon.png" alt="Zypto" className="w-20 h-20 mx-auto mb-6 rounded-xl shadow-lg shadow-cyan-500/10" />
        
        <h1 className="text-3xl font-black mb-2 tracking-tighter uppercase text-cyan-400">
          Unlock your $5 Base spending bonus
        </h1>
        <p className="text-gray-400 mb-8 font-medium">
          Stop Bridging. Spend USDC/ETH IRL.
        </p>

        {/* VERIFITSEERITUD BLOCC */}
        <div className="bg-zinc-900 border-2 border-lime-500/30 p-8 rounded-3xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-lime-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">
            On-Chain Verified
          </div>
          
          <h2 className="text-lime-400 text-4xl font-black mb-2 italic">VERIFIED!</h2>
          
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            Your Farcaster + Base wallet is eligible for **$5 ZYP bonus** + non-custodial Visa card.
          </p>
          
          <p className="text-xs text-cyan-500 font-mono">
            Hey @{context?.user?.username || 'degen'}, stop bridging. Spend Base yields IRL.
          </p>
        </div>

        {/* TEGEVUSNUPUD */}
        <div className="space-y-4">
          <button 
            onClick={() => openLink("https://ref.zypto.com/VMvrJEHIvPb")}
            className="w-full bg-lime-500 hover:bg-lime-400 text-black font-black py-5 rounded-2xl text-xl transition-all active:scale-95 shadow-lg shadow-lime-500/20 uppercase"
          >
            🚀 Claim $5 Bonus Now
          </button>

          <button 
            onClick={() => openLink("https://zypto.com/visa-cards/")}
            className="w-full bg-transparent border-2 border-zinc-700 hover:border-zinc-500 text-white font-bold py-4 rounded-2xl text-lg transition-all active:scale-95 uppercase"
          >
            View Card Perks
          </button>
        </div>

        <p className="mt-12 text-[10px] text-zinc-600 uppercase tracking-widest">
          FID: {context?.user?.fid || '2789157'} • Zypto x Base • 2026
        </p>
      </div>
    </main>
  );
}
