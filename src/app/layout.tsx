import type { Metadata } from 'next';

const embed = {
  version: "1",
  type: "miniapp",
  name: "Zypto Rewards",
  iconUrl: "https://zypto-base-rewards.vercel.app/icon.png",
  imageUrl: "https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png",
  homeUrl: "https://zypto-base-rewards.vercel.app/",
  aspectRatio: "3:2",
  button: {
    title: "Check",
    action: {
      type: "launch_app",
      name: "Zypto Rewards",
      url: "https://zypto-base-rewards.vercel.app/"
    }
  }
};

const stringEmbed = JSON.stringify(embed);

export const metadata: Metadata = {
  title: 'Zypto Rewards',
  description: 'Verify and claim rewards',
  other: {
    'fc:miniapp': stringEmbed,
    'fc:frame': stringEmbed,
    // Lisame igaks juhuks ka vanad tagid, et Action kindlasti kohale jõuaks
    'fc:frame:image': 'https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png',
    'fc:frame:button:1': 'Check',
    'fc:frame:button:1:action': 'post',
    'fc:frame:post_url': 'https://zypto-base-rewards.vercel.app/api/frame',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#050505', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
