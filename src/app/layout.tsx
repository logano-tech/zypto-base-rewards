import type { Metadata } from "next";
import "./globals.css";

const APP_URL = 'https://zypto-base-rewards.vercel.app';

export const metadata: Metadata = {
  title: 'Zypto Rewards',
  description: 'Check your eligibility for $ZYPTO launch rewards on Base.',
  openGraph: {
    title: 'Zypto Rewards',
    description: 'Claim your $5 bonus and spend crypto on Base',
    images: [`${APP_URL}/images/zypto-base-hook.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zypto Rewards',
    description: 'Claim your $5 bonus and spend crypto on Base',
    images: [`${APP_URL}/images/zypto-base-hook.png`],
  },
  other: {
    'fc:frame': 'v2',
    'fc:frame:image': `${APP_URL}/images/zypto-base-hook.png`,
    'fc:frame:button:1': 'Check Rewards',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://ref.zypto.com/VMvrJEHIvPb',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#050505' }}>{children}</body>
    </html>
  );
}
