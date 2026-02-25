import { NextResponse } from 'next/server';

export async function GET() {
  // See vastab brauserile
  return NextResponse.json({ message: "Hub is active" });
}

export async function POST() {
  // See vastab Farcasterile
  // Sinu Frame loogika siia...
}
import { NextResponse } from 'next/server';
import { getFarcasterDomainManifest } from '../../../lib/utils';

export async function GET() {
  try {
    const config = await getFarcasterDomainManifest();
    return NextResponse.json(config);
  } catch (error) {
    console.error('Error generating metadata:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
