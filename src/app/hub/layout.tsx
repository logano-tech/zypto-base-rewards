import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zypto Rewards Hub',
  description: 'Unlock your $5 Base spending bonus',
  openGraph: {
    title: 'Zypto Rewards Hub',
    description: 'Unlock your $5 Base spending bonus',
    images: ['https://zyplink-miniapp.vercel.app/images/zypto-base-hook.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://zyplink-miniapp.vercel.app/images/zypto-base-hook.png',
    'fc:frame:button:1': 'Check Eligibility',
    'fc:frame:button:1:action': 'post',
    'fc:frame:post_url': 'https://zyplink-miniapp.vercel.app/api/hub',
  },
};

export default function HubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
