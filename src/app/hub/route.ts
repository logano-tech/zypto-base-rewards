import { NextResponse } from 'next/server';

export async function POST() {
  /**
   * Kui kasutaja vajutab "Check Eligibility" nuppu, 
   * saadab Farcaster POST päringu siia aadressile.
   */
  
  // Tagastame vastuse, mis käsib avada Mini Appi täisekraanil
  return new NextResponse(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://zyplink-miniapp.vercel.app/images/zypto-base-verified.png" />
        <meta property="fc:frame:button:1" content="Launch Mini App" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://zyplink-miniapp.vercel.app/hub" />
      </head>
    </html>`,
    {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
}

// Lisame ka GET meetodi igaks juhuks testimiseks
export async function GET() {
  return NextResponse.json({ message: "API is active" });
}
