import type { Metadata } from 'next';

const miniAppEmbed = JSON.stringify({
  version: "1",
  type: "miniapp",
  name: "Zypto Rewards",
  iconUrl: "https://zypto-base-rewards.vercel.app/icon.png",
  imageUrl: "https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png",
  homeUrl: "https://zypto-base-rewards.vercel.app",
  button: {
    title: "Check Rewards",
    action: {
      type: "launch_app",
      name: "Zypto Rewards",
      url: "https://zypto-base-rewards.vercel.app"
    }
  }
});

export const metadata: Metadata = {
  title: 'Zypto Rewards Hub',
  description: 'Verify your wallet and unlock exclusive rewards on Base',
  other: {
    'fc:miniapp': miniAppEmbed, // Ainus ja õige tag uute Mini Appide jaoks
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="https://zypto-base-rewards.vercel.app/images/zypto-base-verified.png" as="image" />
        <link rel="preload" href="https://zypto-base-rewards.vercel.app/images/zypto-base-perks.png" as="image" />
        <style dangerouslySetInnerHTML={{ __html: `
          body { background-color: #050505; margin: 0; padding: 0; }
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
