import type { Metadata, Viewport } from "next";
import "./globals.css";

const APP_URL = 'https://zypto-base-rewards.vercel.app';

// Viewport määrab, kuidas äpp mobiilis välja näeb
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00ff88', // See muudab brauseri ülariba Zypto roheliseks
};

export const metadata: Metadata = {
  title: 'Zypto Rewards',
  description: 'Verify your wallet and unlock exclusive rewards on Base',
  
  // LISA NEED READ: Need on kriitilised ikooni kuvamiseks ajaloos
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },

  robots: {
    index: true,
    follow: true,
  },
  
  // Sinu lisatud Base ja Farcasteri spetsiifilised seaded
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
        action: { 
          type: "launch_frame", 
          name: "Zypto Rewards", 
          url: APP_URL 
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
