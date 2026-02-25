import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zypto Rewards',
  description: 'Verify and claim rewards',
  other: {
    // Kirjutame JSON-i otse stringina, et vältida Reacti "object" vigu
    'fc:miniapp': '{"version":"1","type":"miniapp","name":"Zypto Rewards","iconUrl":"https://zypto-base-rewards.vercel.app/icon.png","imageUrl":"https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png","homeUrl":"https://zypto-base-rewards.vercel.app/","aspectRatio":"3:2","button":{"title":"Check","action":{"type":"launch_app","name":"Zypto Rewards","url":"https://zypto-base-rewards.vercel.app/"}}}',
    'fc:frame': '{"version":"1","type":"miniapp","name":"Zypto Rewards","iconUrl":"https://zypto-base-rewards.vercel.app/icon.png","imageUrl":"https://zypto-base-rewards.vercel.app/images/zypto-base-hook.png","homeUrl":"https://zypto-base-rewards.vercel.app/","aspectRatio":"3:2","button":{"title":"Check","action":{"type":"launch_app","name":"Zypto Rewards","url":"https://zypto-base-rewards.vercel.app/"}}}',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#050505', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
