// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Zypto Base Rewards',
  description: 'Stop Bridging, Start Spending on Base',
  openGraph: {
    title: 'Zypto Base Rewards',
    description: 'Claim your $5 bonus and spend crypto on Base',
    images: ['/images/zypto-base-hook.png'],
  },
  other: {
    'fc:frame': 'v2',
    'fc:frame:image': 'https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png',
    'fc:frame:button:1': 'Check Your $5 Bonus',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://ref.zypto.com/VMvrJEHIvPb',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
