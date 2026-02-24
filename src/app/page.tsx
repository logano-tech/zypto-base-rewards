'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/miniapp-sdk';
import { useAccount } from 'wagmi';

export default function ZyptoRewardsMiniApp() {
  const [screen, setScreen] = useState<'hook' | 'reveal' | 'features'>('hook');
  const [context, setContext] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { address: _address } = useAccount();

  const referralLink = "https://ref.zypto.com/VMvrJEHIvPb?utm_source=farcaster&utm_medium=miniapp&utm_campaign=base-to-life";

  useEffect(() => {
    const init = async () => {
      try {
        const ctx = await sdk.context;
        setContext(ctx);
        sdk.actions.ready();
      } catch (_e) {
        window.location.href = "https://cryptoreferral.info";
      } finally {
        setIsLoading(false);
      }
    };
    init();
  }, []);

  const checkEligibility = () => setScreen('reveal');
  const claimBonus = () => sdk.actions.openUrl(referralLink);
  const openPerks = () => setScreen('features');
  const downloadApp = () => sdk.actions.openUrl(referralLink);

  if (isLoading) return <div className="flex h-screen items-center justify-center bg-black text-white">Loading Zypto Power...</div>;

  if (screen === 'hook') {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-mono">
        <img src="/images/zypto-base-hook.png" alt="Zypto" className="w-48 mb-8" />
        <h1 className="text-4xl font-bold text-center mb-4">UNLOCK YOUR $5 BASE SPENDING BONUS</h1>
        <p className="text-xl text-cyan-400 mb-12">Stop Bridging. Spend USDC/ETH IRL.</p>
        <button 
          onClick={checkEligibility} 
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-4 px-12 rounded-xl text-xl transition-all active:scale-95"
        >
          CHECK ELIGIBILITY
        </button>
        <p className="text-xs text-gray-500 mt-8">FID: {context?.user?.fid || '—'}</p>
      </div>
    );
  }

  if (screen === 'reveal') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white p-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-5xl font-black text-cyan-400 mb-2">VERIFIED!</h1>
          <p className="text-2xl mb-8">Your Farcaster + Base wallet is eligible for <span className="text-lime-400">$5 ZYP bonus</span> + non-custodial Visa card.</p>
          <p className="text-lg mb-12">Hey @{context?.user?.username || 'degen'}, stop bridging. Spend Base yields IRL.</p>
          <div className="space-y-4">
            <button onClick={claimBonus} className="w-full bg-lime-500 hover:bg-lime-600 text-black font-bold py-5 rounded-2xl text-xl">🚀 CLAIM $5 BONUS NOW</button>
            <button onClick={openPerks} className="w-full border-2 border-cyan-500 hover:bg-cyan-950 py-5 rounded-2xl text-xl">VIEW CARD PERKS →</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-black mb-8">THE ALL-IN-ONE SUPER APP FOR BASE MAXXERS</h1>
        <ul className="space-y-6 text-lg mb-12">
          <li className="flex gap-4"><span className="text-cyan-400">🔑</span> Non-custodial: Your keys, your crypto</li>
          <li className="flex gap-4"><span className="text-cyan-400">💳</span> Visa Card: Accepted at millions of locations</li>
          <li className="flex gap-4"><span className="text-cyan-400">📍</span> Bill Pay: Utilities & rent in 120+ countries</li>
        </ul>
        <button onClick={downloadApp} className="w-full bg-gradient-to-r from-cyan-500 to-lime-500 text-black font-black py-6 rounded-3xl text-2xl active:scale-95">DOWNLOAD & GET STARTED</button>
        <p className="text-center text-xs text-gray-500 mt-8">Join 100,000+ users. I&apos;ve been using Zypto to fund my daily life with Base yields. It&apos;s the only non-custodial app that actually spends like cash.</p>
      </div>
    </div>
  );
}