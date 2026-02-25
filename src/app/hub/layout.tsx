import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Zypto Rewards Hub',
  description: 'Unlock your Five USD Base spending bonus',
  openGraph: {
    title: 'Zypto Rewards Hub',
    description: 'Unlock your Five USD Base spending bonus',
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
  return (
    <div style={{ 
      backgroundColor: 'black', 
      minHeight: '100vh', 
      width: '100%',
      margin: 0,
      padding: 0,
      overflowX: 'hidden' 
    }}>
      {children}
    </div>
  );
}
