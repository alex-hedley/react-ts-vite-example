# Docs

- https://vitejs.dev/guide/

`npm create vite@latest example-app -- --template react-ts`

`npm install @mui/material @emotion/react @emotion/styled`

`npm install @fontsource/roboto`

`npm install @mui/icons-material`

## Formatting

`npm run lint`

`npm run lint-fix`

`npm run format`

`eslint` was already in the project.

`npm install --save-dev --save-exact prettier`

## Deploy

See the GitHub Action Workflow - [deploy.yml](../.github/workflows/deploy.yml).

Update the [vite.config.ts](../src/vite.config.ts) `base` to match the GitHub repo name.

- https://alex-hedley.github.io/react-ts-vite-example/
