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
- pnpm init
- pnpm dlx create-next-app@latest
- create .gitignore file in base monorepo and commit
- updated web package name, updated pnpm script, added test buttona and page in next project
