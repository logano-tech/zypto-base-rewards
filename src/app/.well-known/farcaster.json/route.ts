import { NextResponse } from 'next/server';

export async function GET() {
  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjI3ODkxNTcsInR5cGUiOiJhdXRoIiwia2V5IjoiMHhFOTFmMjA0RGEwMUE5ZTVFRDY1NDlhZjI5NTBBMDJDQzc0OUJFYTg3In0",
      payload: "eyJkb21haW4iOiJ6eXBsaW5rLW1pbmlhcHAudmVyY2VsLmFwcCJ9",
      signature: "yBEbybiSeyrrc7vIs6Z1AaHA+U1SPjLnOZCsGuOMYjFlNO4RMSkuz/A8GNTr9bQDmAATb9USizQ15debYv0rxxs="
    },
    frame: {
      version: "1",
      name: "Zypto Rewards Hub",
      iconUrl: "https://zyplink-miniapp.vercel.app/icon.png",
      homeUrl: "https://zyplink-miniapp.vercel.app",
      imageUrl: "https://zyplink-miniapp.vercel.app/images/zypto-base-hook.png",
      buttonTitle: "Check Eligibility",
      splashImageUrl: "https://zyplink-miniapp.vercel.app/images/zypto-base-hook.png",
      splashBackgroundColor: "#000000"
    }
  };

  return NextResponse.json(config);
}
