import type { Metadata } from 'next';

const frame = {
  version: "1",
  imageUrl: "https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png",
  button: {
    title: "Check Rewards", 
    action: {
      type: "launch_frame", 
      name: "Zypto Rewards",
      url: "https://zypto-base-rewards.vercel.app",
      splashImageUrl: "https://zypto-base-rewards.vercel.app/icon.png",
      splashBackgroundColor: "#050505"
    }
  }
};

export const metadata: Metadata = {
  title: "Zypto Rewards Hub",
  description: "Verify your wallet and unlock exclusive rewards on Base",
  openGraph: {
    title: "Zypto Rewards Hub",
    description: "Verify your wallet and unlock exclusive rewards on Base",
    images: ["https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png"],
  },
  other: {
    "fc:miniapp": JSON.stringify(frame),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Piltide eellaadimine kiiremaks vahetuseks */}
        <link rel="preload" href="https://zypto-base-rewards.vercel.app/images/zypto-base-verified.png" as="image" />
        <link rel="preload" href="https://zypto-base-perks.png" as="image" />
      </head>
      <body style={{ backgroundColor: '#050505', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
