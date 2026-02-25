import { Metadata } from 'next';

export const metadata: Metadata = {
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://zypto-base-rewards.vercel.app/images/image_3d8868.jpg', // "Check Eligibility" pilt
    'fc:frame:button:1': 'Check Eligibility',
    'fc:frame:button:1:action': 'post',
    'fc:frame:post_url': 'https://zypto-base-rewards.vercel.app/api/frame',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'black', margin: 0 }}>{children}</body>
    </html>
  );
}
