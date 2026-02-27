import type { Metadata } from "next";
import "./globals.css";

const APP_URL = 'https://zypto-base-rewards.vercel.app';

export const metadata: Metadata = {
  title: 'Zypto Rewards',
  description: 'Stop Bridging, Start Spending on Base',
  openGraph: {
    title: 'Zypto Rewards',
    description: 'Claim your $5 bonus and spend crypto on Base',
    url: APP_URL,
    images: [`${APP_URL}/images/zypto-base-hook.png`],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zypto Rewards',
    description: 'Stop Bridging, Start Spending on Base',
    images: [`${APP_URL}/images/zypto-base-hook.png`],
  },
  other: {
    // Farcaster Mini App v1 standard
    'fc:miniapp': 'v1',
    'fc:miniapp:image': `${APP_URL}/images/zypto-base-hook.png`,
    'fc:miniapp:button:1': 'Check Rewards',
    'fc:miniapp:button:1:action': 'link',
    'fc:miniapp:button:1:target': 'https://ref.zypto.com/VMvrJEHIvPb',
    // Tagasiühilduvus
    'fc:frame': 'v2',
    'fc:frame:image': `${APP_URL}/images/zypto-base-hook.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#050505' }}>
        {children}
      </body>
    </html>
  );
}
