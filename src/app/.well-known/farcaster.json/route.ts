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
      homeUrl: "https://zyplink-miniapp.vercel.app/hub",
      imageUrl: "https://zyplink-miniapp.vercel.app/images/zypto-base-hook.png",
      buttonTitle: "Check Eligibility",
      splashImageUrl: "https://zyplink-miniapp.vercel.app/images/zypto-base-hook.png",
      splashBackgroundColor: "#000000",
      webhookUrl: "https://zyplink-miniapp.vercel.app/api/webhook",
      
      // Need väljad täidavad portaalis puuduolevad read:
      subtitle: "Unlock $5 Base Rewards",
      description: "The ultimate rewards hub for Base Maxxers. Verify your wallet to unlock a $5 ZYP bonus and access your non-custodial Visa card.",
      screenshotUrls: [
        "https://zyplink-miniapp.vercel.app/images/zypto-base-verified.png",
        "https://zyplink-miniapp.vercel.app/images/zypto-base-perks.png"
      ],
      primaryCategory: "finance",
      tags: ["zypto", "base", "rewards", "visa", "fintech"],
      heroImageUrl: "https://zyplink-miniapp.vercel.app/images/zypto-base-hook.png",
      tagline: "Stop Bridging. Spend USDC/ETH IRL.",
      ogTitle: "Zypto Is Based",
      ogDescription: "Verify your wallet and start spending your Base yields IRL",
      ogImageUrl: "https://zyplink-miniapp.vercel.app/images/zypto-base-verified.png"
    }
  };

  return NextResponse.json(config);
}
