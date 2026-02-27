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
  other: {
    // KORREKTNE MINI APP SÜNTAKS
    'fc:miniapp': 'v1',
    'fc:miniapp:image': `${APP_URL}/images/zypto-base-hook.png`,
    'fc:miniapp:button:1': 'Check Rewards',
    'fc:miniapp:button:1:action': 'link',
    'fc:miniapp:button:1:target': 'https://ref.zypto.com/VMvrJEHIvPb',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#050505' }}>{children}</body>
    </html>
  );
}
