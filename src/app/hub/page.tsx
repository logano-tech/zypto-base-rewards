'use client';

import { useState, useEffect, useCallback } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function HubPage() {
  const [isSdkReady, setIsSdkReady] = useState(false);
  const [context, setContext] = useState<any>(null);

  useEffect(() => {
    const init = async () => {
      try {
        // 1. Käivitame Farcaster SDK ja küsime kasutaja andmeid
        const ctx = await sdk.context;
        setContext(ctx);
        
        // 2. Teatame Farcasterile, et leht on valmis (eemaldab loading-ekraani)
        await sdk.actions.ready();
        setIsSdkReady(true);
      } catch (error) {
        console.error("SDK initialization failed", error);
        // Lubame lehel laadida ka juhul, kui SDK ei vasta
        setIsSdkReady(true);
      }
    };
    init();
  }, []);

  // Universaalne funktsioon linkide avamiseks
  const handleOpenUrl = useCallback((url: string) => {
    if (typeof window !== 'undefined') {
      // Kui oleme Farcasteri sees, kasutame SDK meetodit
      if (sdk?.actions?.openUrl) {
        sdk.actions.openUrl(url);
      } 
      // Varulahendus: suuname brauseri akna otse ümber
      else {
        window.location.href = url;
      }
    }
  }, []);

  if (!isSdkReady) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-lime-500 font-mono animate-pulse uppercase tracking-widest">
          Initializing Hub...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6 font-sans">
      <div className="max-w-md w-full text-center mt-4">
        
        {/* LOGO */}
        <img 
          src="/icon.png" 
          alt="Zypto" 
          className="w-16 h-16 mx-auto mb-6 rounded-xl shadow-lg shadow-cyan-500/20" 
        />
        
        {/* PEALKIRJAD */}
        <h1 className="text-3xl font-black mb-2 tracking-tighter text-cyan-400 uppercase leading-none">
          Unlock your $5 Base spending bonus
        </h1>
        <p className="text-gray-400 mb-8 font-medium text-sm uppercase tracking-wide">
          Stop Bridging. Spend USDC/ETH IRL.
        </p>

        {/* VERIFITSEERITUD KAART */}
        <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-[2rem] mb-10 relative overflow-hidden ring-1 ring-lime-500/30">
          <div className="absolute top-0 right-0 bg-lime-500 text-black text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase">
            On-Chain Verified
          </div>
          
          <h2 className="text-lime-500 text-5xl font-black mb-4 italic tracking-tighter">VERIFIED!</h2>
          
          <p className="text-sm text-zinc-200 mb-6 leading-relaxed">
            Your Farcaster + Base wallet is eligible for **$5 ZYP bonus** + non-custodial Visa card.
          </p>
          
          <p className="text-[11px] text-cyan-500 font-mono bg-cyan-500/10 py-2 rounded-lg border border-cyan-500/20">
            Hey @{context?.user?.username || 'degen'}, stop bridging. Spend Base yields IRL.
          </p>
        </div>

        {/* TEGEVUSNUPUD */}
        <div className="space-y-4">
          <button 
            type="button"
            onClick={() => handleOpenUrl("https://ref.zypto.com/VMvrJEHIvPb")}
            className="w-full bg-lime-500 hover:bg-lime-400 text-black font-black py-5 rounded-2xl text-xl transition-all active:scale-95 shadow-xl shadow-lime-500/20 uppercase cursor-pointer"
          >
            🚀 Claim $5 Bonus Now
          </button>

          <button 
            type="button"
            onClick={() => handleOpenUrl("https://zypto.com/visa-cards/")}
            className="w-full bg-transparent border-2 border-zinc-800 hover:border-zinc-600 text-white font-black py-4 rounded-2xl text-lg transition-all active:scale-95 uppercase cursor-pointer"
          >
            View Card Perks
          </button>
        </div>

        {/* JALUS */}
        <div className="mt-12 opacity-30">
          <p className="text-[9px] uppercase tracking-[0.3em]">
            FID: {context?.user?.fid || '2789157'} • Zypto x Base • 2026
          </p>
        </div>
      </div>
    </main>
  );
}
