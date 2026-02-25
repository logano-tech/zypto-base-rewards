'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';

export default function HubPage() {
  const [isSdkReady, setIsSdkReady] = useState(false);
  const [context, setContext] = useState<any>(null);

  useEffect(() => {
    const init = async () => {
      try {
        // Laeme Farcasteri konteksti
        const ctx = await sdk.context;
        setContext(ctx);
        
        // Teavitame Farcasteri äppi, et liides on valmis kuvamiseks
        sdk.actions.ready();
        setIsSdkReady(true);
      } catch (error) {
        console.error("SDK initialization failed", error);
      }
    };

    init();
  }, []);

  if (!isSdkReady) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white font-mono">
        <div className="text-center">
          <p className="text-xl animate-pulse text-cyan-400">LOADING ZYPTO HUB...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6 font-sans">
      <div className="max-w-md w-full text-center mt-12">
        <img 
          src="/icon.png" 
          alt="Zypto Logo" 
          className="w-24 h-24 mx-auto mb-8 rounded-2xl shadow-lg shadow-cyan-500/20"
        />
        
        <h1 className="text-4xl font-black mb-4 tracking-tighter">
          ZYPTO REWARDS HUB
        </h1>
        
        <p className="text-gray-400 text-lg mb-12">
          Welcome, <span className="text-cyan-400">@{context?.user?.username || 'user'}</span>! 
          You are now inside the verified Zypto Mini App on Base.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl mb-8">
          <h2 className="text-lime-400 text-2xl font-bold mb-2">ELIGIBILITY STATUS</h2>
          <p className="text-white text-3xl font-black mb-4 underline decoration-lime-500">VERIFIED</p>
          <p className="text-sm text-gray-500">FID: {context?.user?.fid || 'Unknown'}</p>
        </div>

        <button 
          onClick={() => sdk.actions.openUrl("https://ref.zypto.com/VMvrJEHIvPb")}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-black py-5 rounded-2xl text-xl transition-transform active:scale-95"
        >
          CLAIM $5 BONUS NOW
        </button>
        
        <p className="mt-8 text-xs text-gray-600 italic">
          Real World Ready. Built on Base.
        </p>
      </div>
    </main>
  );
}
export const metadata = {
  title: 'Zypto Rewards Hub',
  description: 'Unlock your $5 Base spending bonus',
  openGraph: {
    title: 'Zypto Rewards Hub',
    description: 'Unlock your $5 Base spending bonus',
    images: ['https://zyplink-miniapp.vercel.app/images/zypto-base-hook.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://zyplink-miniapp.vercel.app/images/zypto-base-hook.png',
    'fc:frame:button:1': 'Check Eligibility',
    'fc:frame:button:1:action': 'post',
    'fc:frame:post_url': 'https://zyplink-miniapp.vercel.app/api/hub',
  },
};
