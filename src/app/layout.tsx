import type { Metadata } from "next";
import "./globals.css";

const APP_URL = 'https://zypto-base-rewards.vercel.app';

export const metadata: Metadata = {
  title: 'Zypto Rewards',
  description: 'Verify your wallet and unlock exclusive rewards on Base',
  openGraph: {
    title: 'Zypto Rewards Hub',
    description: 'Claim your $5 bonus and spend crypto on Base',
    url: APP_URL,
    images: [`${APP_URL}/images/zypto-base-hook.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zypto Rewards Hub',
    description: 'Stop Bridging, Start Spending on Base',
    images: [`${APP_URL}/images/zypto-base-hook.png`],
  },
  other: {
    // See osa sünkroonib sinu farcaster.json-iga, et märk oleks "Valid"
    'fc:frame': JSON.stringify({
      version: "1",
      name: "Zypto Rewards",
      iconUrl: `${APP_URL}/icon.png`,
      homeUrl: APP_URL,
      imageUrl: `${APP_URL}/images/zypto-base-hook.png`,
      button: {
        title: "Check Rewards",
        action: {
          type: "launch_frame",
          name: "Zypto Rewards",
          url: APP_URL,
        },
      },
    }),
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
