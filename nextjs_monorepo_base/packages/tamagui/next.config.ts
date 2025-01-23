import type { NextConfig } from "next";
import { withTamagui } from "@tamagui/next-plugin";
// const { withTamagui } = require('@tamagui/next-plugin')

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ['@nmb/ui', 'tamagui'],
  typescript: {
    ignoreBuildErrors: false
  },
  // experimental: {
  //   turbo: {
  //     rules: {
  //       // Ensure Tamagui CSS and polyfills are handled
  //       '*.css': {
  //         loaderOptions: {
  //           type: 'css'
  //         }
  //       }
  //     }
  //   }
  // }
};

const tamaguiPlugin = withTamagui({
  config: './tamagui.config.ts',
  components: ['tamagui', '@nmb/ui'],
  excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'Alert'],
  // Use outputCSS for production builds
  outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
  // Disable extraction in development for better performance
  disableExtraction: process.env.NODE_ENV === 'development'
});

export default tamaguiPlugin(nextConfig);

