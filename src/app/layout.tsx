import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zypto Rewards Hub',
  description: 'Verify your wallet to unlock Base rewards.',
  openGraph: {
    title: 'Zypto Rewards Hub',
    description: 'Verify your wallet to unlock Base rewards.',
    images: ['https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png'],
  },
  other: {
    // KRIITILISED FARCASTERI META-TAGID EMBED PREVIEW JAOKS
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png',
    'fc:frame:button:1': 'Check Eligibility',
    'fc:frame:post_url': 'https://zypto-base-rewards.vercel.app/api/frame',
    
    // MINI ÄPI META-TAGID
    'farcaster:app:name': 'Zypto Rewards Hub',
    'farcaster:app:icon': 'https://zypto-base-rewards.vercel.app/images/icon.png',
    'farcaster:app:url': 'https://zypto-base-rewards.vercel.app/',
    'farcaster:app:description': 'Unlock exclusive Zypto rewards on Base.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#050505', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
