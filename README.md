# nextjs_monorepo_base_v3

setup

# 1) monorepo setup
- mkdir nextjs_monorepo_base > cd nextjs_monorepo_base
- pnpm init
- pnpm-workspace.yaml
- tsconfig.json
- package.json
- mkdir -p apps packages/ui
- git init (if needed)  >>  commit changes and push branch

# 2) nextjs setup
- cd apps  >>  pnpm dlx create-next-app@latest
- pnpm init (only if blank folder..)
- create .gitignore file in base monorepo and commit
- updated web package name, updated pnpm script, added test button and test page in next project

# 2) tamagui setup
- cd packages  >>  pnpm dlx create-next-app@latest --> (git add && commit)
- pnpm install @tamagui/next-plugin  -->  maually update dependencies >> pnpm install --force --> pnpm up
- pnpm install @tamagui/config --> copied tamagui.config.ts file form tamagui (v4)
- updated next.config.ts with a custom config !important
- add NextTamaguiProvider.tsx following tamagui docs (https://tamagui.dev/docs/guides/next-js#applayouttsx)
- pnpm install @tamagui/next-theme
- pnpm add @tamagui/core @tamagui/polyfill-dev tamagui

# 2) reverser
- made reverser project
