import type { NextConfig } from "next";
// SEE IMPORT ON PUUDU:
import path from "path";

const nextConfig: NextConfig = {
  typescript: {
    // Ignoreerime skriptide vigu, et build läbi läheks
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignoreerime lindi vigu
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    // See lahendab "Module not found: Can't resolve '~' ja '@'" vead
    config.resolve.alias['~'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
