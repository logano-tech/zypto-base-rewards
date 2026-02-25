'use client';

import sdk from '@farcaster/miniapp-sdk';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const openDownload = () => {
    const url = "https://farcaster.xyz/miniapps/SwSge26jJZ6_/zypto-rewards-hub";
    if (sdk?.actions?.openUrl) {
      sdk.actions.openUrl(url);
    } else {
      window.location.href = url;
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-black mb-12 leading-tight uppercase">
        The All-In-One<br/>Super App for Base<br/>Maxxers
      </h1>
      
      <div className="space-y-8 mb-16 text-left w-full max-w-xs mx-auto">
        <div className="flex items-center gap-4 text-lg">
          <span>🔑</span> <p>Non-custodial: Your keys, your crypto</p>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <span>💳</span> <p>Visa Card: Accepted at millions of locations</p>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <span>📍</span> <p>Bill Pay: Utilities & rent in 120+ countries</p>
        </div>
      </div>

      <button 
        onClick={openDownload}
        className="w-full max-w-sm bg-gradient-to-r from-cyan-400 to-lime-500 text-black font-black py-6 rounded-3xl text-2xl uppercase shadow-xl"
      >
        Download & Get Started
      </button>

      <p className="mt-12 text-[10px] text-zinc-500 max-w-xs mx-auto uppercase leading-relaxed opacity-50">
        Join 100,000+ users. I&apos;ve been using Zypto to fund my daily life with Base yields. 
        It&apos;s the only non-custodial app that actually spends like cash.
      </p>
    </main>
  );
}
