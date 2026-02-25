import { Metadata } from 'next';

// See objekt muudab su äpi Warpcastis nähtavaks ja "Valid" staatusega
const miniAppEmbed = JSON.stringify({
  version: "1",
  type: "miniapp",
  name: "Zypto Rewards",
  iconUrl: "https://zypto-base-rewards.vercel.app/icon.png",
  imageUrl: "https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png",
  homeUrl: "https://zypto-base-rewards.vercel.app/",
  button: {
    title: "Check",
    action: {
      type: "launch_app",
      name: "Zypto Rewards",
      url: "https://zypto-base-rewards.vercel.app/"
    }
  }
});

export const metadata: Metadata = {
  title: 'Zypto Rewards',
  description: 'Verify and claim rewards',
  openGraph: {
    title: 'Zypto Rewards',
    description: 'Verify and claim rewards',
    images: ['https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png'],
  },
  other: {
    // Uus standard: stringified JSON
    'fc:miniapp': miniAppEmbed,
    // Tagasiühilduvus: stringified JSON
    'fc:frame': miniAppEmbed,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#050505', margin: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
