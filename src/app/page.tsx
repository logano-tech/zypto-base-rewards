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
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center p-5 text-center justify-center font-sans selection:bg-lime-500/30">
      <div className="max-w-md w-full space-y-8">
        
        {/* LOGO ÜLAL - Fikseeritud suurus, et vältida kujunduse paigast minekut */}
        <div className="mb-2 animate-in fade-in zoom-in duration-700">
          <img 
            src="/icon.png" 
            alt="Zypto" 
            className="w-16 h-16 mx-auto rounded-xl shadow-lg shadow-lime-500/10 object-contain" 
          />
        </div>

        {/* SAMM 1: CHECK ELIGIBILITY */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="/images/zypto-base-hook.png" 
                alt="Verify" 
                className="relative w-full rounded-[2rem] border border-white/10 shadow-2xl" 
              />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl font-black tracking-tighter uppercase italic leading-none">
                Verify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">Wallet</span>
              </h1>
              <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em] font-bold">
                Unlock exclusive Zypto rewards on Base
              </p>
            </div>

            <button 
              onClick={() => setStep(2)}
              className="group relative w-full py-5 bg-white text-black font-black rounded-2xl text-xl uppercase transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Check Eligibility <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </div>
        )}

        {/* SAMM 2: VERIFIED */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in zoom-in duration-500">
            <div className="relative">
               <div className="absolute -inset-4 bg-lime-500/10 blur-3xl rounded-full"></div>
               <img 
                src="/images/zypto-base-verified.png" 
                alt="Verified" 
                className="relative w-full rounded-[2rem] border border-lime-500/30 shadow-2xl shadow-lime-500/10" 
              />
            </div>
            
            <div className="space-y-1">
              <h2 className="text-lime-500 text-6xl font-black italic tracking-tighter uppercase leading-none drop-shadow-sm">
                Verified!
              </h2>
              <p className="text-zinc-400 uppercase text-[10px] tracking-widest font-bold">
                Your rewards are ready to claim
              </p>
            </div>

            <button 
              onClick={() => setStep(3)}
              className="w-full bg-lime-500 text-black font-black py-5 rounded-2xl text-xl uppercase shadow-[0_0_40px_rgba(132,204,22,0.3)] hover:bg-lime-400 active:scale-95 transition-all"
            >
              View My Rewards
            </button>
          </div>
        )}

        {/* SAMM 3: PERKS & CLAIM */}
        {step === 3 && (
          <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-500">
            <img 
              src="/images/zypto-base-perks.png" 
              alt="Perks" 
              className="w-full rounded-[2rem] border border-cyan-500/20" 
            />
            
            <div className="grid gap-4">
              <button 
                onClick={() => handleLink(referralUrl)}
                className="group w-full bg-gradient-to-r from-cyan-500 to-lime-500 p-[2px] rounded-2xl transition-transform active:scale-95 shadow-xl shadow-lime-500/20"
              >
                <div
