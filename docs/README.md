# Docs

`npm create vite@latest example-app -- --template react-ts`

- https://vitejs.dev/guide/

`npm install @mui/material @emotion/react @emotion/styled`

`npm install @fontsource/roboto`

`npm install @mui/icons-material`

`npm install node-sass`

`npm install sass --save-dev`

## Formatting

`npm run lint`

`npm run lint-fix`

`npm run format`

`eslint` was already in the project.

`npm install --save-dev --save-exact prettier`

## Lighthouse

- https://github.com/GoogleChrome/lighthouse

`npm run lighthouse`

`npm i lighthouse`

`cd src && mkdir lighthouse`

`lighthouse https://alex-hedley.github.io/react-ts-vite-example/ --output json --output html --output-path ./lighthouse/index.json`

## Deploy

See the GitHub Action Workflow - [deploy.yml](../.github/workflows/deploy.yml).

Update the [vite.config.ts](../src/vite.config.ts) `base` to match the GitHub repo name.

- https://alex-hedley.github.io/react-ts-vite-example/
