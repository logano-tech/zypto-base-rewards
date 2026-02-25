import type { Metadata } from 'next';

// See on sünkroniseeritud sinu uue farcaster.json failiga
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
  openGraph: {
    title: 'Zypto Rewards Hub',
    description: 'Verify your wallet and unlock exclusive rewards on Base',
    images: ['https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png'],
  },
  other: {
    // Uus standard
    'fc:miniapp': miniAppEmbed,
    // Tagasiühilduvuse ja nupu "Action" jaoks
    'fc:frame': miniAppEmbed,
    'fc:frame:image': 'https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png',
    'fc:frame:button:1': 'Check Rewards',
    'fc:frame:button:1:action': 'post',
    'fc:frame:post_url': 'https://zypto-base-rewards.vercel.app/api/webhook',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ 
        backgroundColor: '#050505', 
        margin: 0, 
        padding: 0,
        color: 'white',
        overflowX: 'hidden'
      }}>
        {children}
      </body>
    </html>
  );
}
