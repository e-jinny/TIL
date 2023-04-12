# First Try Vite

📖. The purpose of this is just to try creating React app using “**Vite”**.

### Vite Docs

(Vite)[[https://vitejs.dev/](https://vitejs.dev/)]

### Why Vite?

- much faster than CRA
- out-of-the-box writing
- provides tons of great features
- get way better dev experience

### Then why did I learn CRA?

- there’s still plenty of code examples that use CRA
  - so it’s useful to know the general layout and commands
- just to get comfortable writing React code in any environment
  - once I start working for a company or switch to one of the React frameworks, the dev envrionment will be different - folders and commands…etc

### Install / Setup

- check npm version `npm -v`
  - mine is `8.19.2`

```bash
# npm 7+, extra double-dash is needed:
npm create vite@lates my-react-app -- --template react
npm install
npm run dev
```

- http://localhost:5173/

### Instructions

- need to use .jsx extension
- index.html in the source instead of public
- assets still in public
- instead of index.js, need to use main.jsx
- to spin up dev server, run: `npm run dev`
- rest the same - imports/exports, deployment, assets, etc...
- bundled files in dist/ instead of build/
- to view the bundled app in `./dist`, run: `npm run serve`
