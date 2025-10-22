# ⚛️ React + TypeScript + Vite + Pixi.js Template

This template provides a minimal yet powerful setup to build modern **React** applications with **Vite**, **TypeScript**, and **Pixi.js** (via `@pixi/react`). It supports hot module replacement (HMR), strict linting, and reusable Pixi components.

## 📦 Installed Packages

- `react@^19.1.1`
- `react-dom@^19.1.1`
- `vite`
- `typescript`
- `pixi.js@^8.14.0`
- `@pixi/react@^8.0.3`
- `pixi-viewport@^6.0.3`

## ⚡ Vite React Plugins

You can choose between two official plugins for React Fast Refresh:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react): Uses **Babel** (or [oxc](https://oxc.rs) with [rolldown-vite](https://vite.dev/guide/rolldown))
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc): Uses **SWC** for faster compilation

## 🧠 React Compiler (Optional)

The [React Compiler](https://react.dev/learn/react-compiler/installation) is **not enabled** by default due to its current impact on dev and build performance. If needed, follow the [installation guide](https://react.dev/learn/react-compiler/installation).

---

## 🎮 Pixi.js Integration with React

This template includes **Pixi.js** support using `@pixi/react` to render interactive canvas scenes within your React app. It supports:

- `<Stage>`, `<Sprite>`, and other core Pixi components
- Integration with `pixi-viewport` for camera control, panning, zooming, etc.
- Fully typed reusable components powered by React and TypeScript

Great for games, data visualization, interactive graphics, and more.

---

## ✅ ESLint Setup

### Recommended ESLint Configuration

If you're building a production-grade application, it's recommended to enable **type-aware** lint rules:

```ts
// eslint.config.js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Type-aware rules
      tseslint.configs.recommendedTypeChecked,
      // Or stricter:
      // tseslint.configs.strictTypeChecked,
      // Optional: stylistic rules
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
