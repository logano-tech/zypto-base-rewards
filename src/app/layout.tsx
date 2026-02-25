import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zypto Rewards',
  description: 'Verify and claim rewards',
  openGraph: {
    title: 'Zypto Rewards',
    description: 'Verify and claim rewards',
    images: ['https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png',
    'fc:frame:button:1': 'Check Eligibility',
    'fc:frame:post_url': 'https://zypto-base-rewards.vercel.app/api/frame',
    'farcaster:app:name': 'Zypto Rewards',
    'farcaster:app:icon': 'https://zypto-base-rewards.vercel.app/icon.png',
    'farcaster:app:url': 'https://zypto-base-rewards.vercel.app/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#050505', margin: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
