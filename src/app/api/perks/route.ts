import { NextResponse } from 'next/server';

export async function POST() {
  return new NextResponse(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://zypto-base-rewards.vercel.app/images/zypto-base-perks.png" />
        <meta property="fc:frame:button:1" content="Claim $5 Bonus" />
        <meta property="fc:frame:button:1:action" content="launch_app" />
        <meta property="fc:frame:button:1:target" content="https://zypto-base-rewards.vercel.app/" />
      </head>
    </html>`,
    { status: 200, headers: { 'Content-Type': 'text/html' } }
  );
}
