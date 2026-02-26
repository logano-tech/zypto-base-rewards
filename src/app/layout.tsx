import type { Metadata } from 'next';

// Sünkroniseeritud nupu tekst ja tegevus
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
    'fc:miniapp': miniAppEmbed,
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
      <head>
        {/* Piltide eellaadimine, et kaotada "flash" piltide vahel */}
        <link rel="preload" href="https://zypto-base-rewards.vercel.app/images/zypto-base-verified.png" as="image" />
        <link rel="preload" href="https://zypto-base-rewards.vercel.app/images/zypto-base-perks.png" as="image" />
        
        {/* Globaalne stiil nupu ja UX parandamiseks */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --zypto-green: #00ff88; /* See erkroheline, mis sulle meeldis */
            --zypto-dark: #050505;
          }
          body {
            background-color: var(--zypto-dark);
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            text-align: center;
          }
          /* Muudame selle "igava valge nupu" ilusaks Zypto nupuks */
          button, .cta-button {
            background: var(--zypto-green) !important;
            color: black !important;
            font-weight: 700 !important;
            border: none !important;
            border-radius: 12px !important;
            padding: 14px 28px !important;
            font-size: 18px !important;
            cursor: pointer !important;
            transition: transform 0.2s, box-shadow 0.2s !important;
            box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3) !important;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          button:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(0, 255, 136, 0.5) !important;
          }
          button:active {
            transform: scale(0.98);
          }
        `}} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
