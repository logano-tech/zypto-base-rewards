import { Metadata } from 'next';

// Loome Embed objekti vastavalt Farcasteri nõuetele
const miniAppEmbed = JSON.stringify({
  version: "1",
  type: "miniapp",
  name: "Zypto Rewards",
  iconUrl: "https://zypto-base-rewards.vercel.app/icon.png",
  imageUrl: "https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png",
  homeUrl: "https://zypto-base-rewards.vercel.app/",
  buttonTitle: "Check"
});

export const metadata: Metadata = {
  title: 'Zypto Rewards',
  description: 'Verify and claim rewards',
  other: {
    // See on see kriitiline "konks" – JSON peab olema meta-tagi sees tekstina
    'fc:miniapp': miniAppEmbed,
    'fc:frame': miniAppEmbed, // Tagasiühilduvuse jaoks
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#050505', margin: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
