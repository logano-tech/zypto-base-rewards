'use client';

export default function LandingPage() {
  const referralUrl = "https://ref.zypto.com/VMvrJEHIvPb";

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <img src="/images/image_3d855c.jpg" className="w-full max-w-md rounded-2xl mb-8 border border-cyan-500/30" />
      
      <h1 className="text-4xl font-black mb-4 uppercase italic">Verified!</h1>
      <p className="text-zinc-400 mb-10 uppercase tracking-widest text-sm">Your rewards are ready to claim</p>

      <button 
        onClick={() => window.location.href = referralUrl}
        className="w-full max-w-xs bg-lime-500 text-black font-black py-5 rounded-2xl text-2xl uppercase shadow-[0_0_30px_rgba(132,204,22,0.3)]"
      >
        🚀 Claim & Download
      </button>

      <button 
        onClick={() => window.location.href = "https://zypto.com/visa-cards/"}
        className="mt-4 text-zinc-500 uppercase font-bold text-xs hover:text-white transition-colors"
      >
        View Card Perks
      </button>
    </main>
  );
}
