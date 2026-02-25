import { NextResponse } from 'next/server';

export async function POST() {
  return new NextResponse(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://zypto-base-rewards.vercel.app/images/image_3d855c.jpg" />
        <meta property="fc:frame:button:1" content="Claim $5 Bonus" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:post_url" content="https://zypto-base-rewards.vercel.app/api/rewards" />
      </head>
    </html>`,
    { status: 200, headers: { 'Content-Type': 'text/html' } }
  );
}
