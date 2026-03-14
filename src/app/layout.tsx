import type { Metadata } from "next";
import "./globals.css";

const APP_URL = 'https://zypto-base-rewards.vercel.app';

export const metadata: Metadata = {
  title: 'Zypto Rewards',
  description: 'Verify your wallet and unlock exclusive rewards on Base',
  // See rida peaks lahendama noindex vea
  robots: "index, follow", 
  other: {
    'base:app_id': '69b5295868ed07045acf8ded',
    'base:app_name': 'Zypto Rewards',
    'base:app_description': 'Verify your wallet and unlock exclusive rewards on Base',
    'base:app_url': APP_URL,
    'base:app_icon': `${APP_URL}/icon.png`,
    'fc:frame': JSON.stringify({
      version: "1",
      name: "Zypto Rewards",
      homeUrl: APP_URL,
      imageUrl: `${APP_URL}/images/zypto-base-hook.png`,
      button: {
        title: "Check Rewards",
        action: { type: "launch_frame", name: "Zypto Rewards", url: APP_URL },
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
