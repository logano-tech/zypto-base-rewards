import { NextResponse } from 'next/server';

export async function POST() {
  return new NextResponse(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://zypto-base-rewards.vercel.app/images/image_3d84a5.jpg" />
        <meta property="fc:frame:button:1" content="Download Zypto App" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://ref.zypto.com/VMvrJEHIvPb" />
      </head>
    </html>`,
    { status: 200, headers: { 'Content-Type': 'text/html' } }
  );
}
