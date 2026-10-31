# Redixel Web

[![Online Playground](https://img.shields.io/badge/Online-Playground-orange?style=for-the-badge)](https://redixel-web.vercel.app/)

Redixel Web is the official frontend and interactive playground for the [Redixel Game Engine](https://github.com/Redixel-Team/Redixel).

The primary goal of this repository is to demonstrate Redixel's cross-platform 2D & 3D capabilities by running its native Rust games directly in the browser using **WebAssembly (WASM)** and **WebGPU**. It features a dynamic, CRT-themed UI that automatically catalogs and runs engine examples.

## How It Works

This repository serves strictly as the presentation layer. **No game logic or Rust code is maintained here.** Instead, it relies on an automated CI/CD pipeline connected to the main [Redixel Engine repository](https://github.com/Redixel-Team/Redixel). Whenever the engine's `main` branch is updated:

1. The engine's CI compiles the examples (e.g., Pong, Shooter) into `.wasm` and `.js` bindings.
2. A build script generates a `games_manifest.json` containing the metadata (title, description, tags) from the engine's `Cargo.toml` files.
3. These artifacts are automatically pushed to the `public/static/` directory of this repository.
4. The React application dynamically fetches the manifest and renders the games in the browser.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 + TypeScript, server-rendered through Nitro) on Vite
- **Styling:** Tailwind CSS v4
- **Validation:** zod, for the games manifest
- **Integration:** WebAssembly (WASM) + WebGPU, with a WebGL2 fallback (via Redixel Engine)
- **Tooling:** Biome (lint and format)

## Running Locally

Requires Node.js and npm.

```sh
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # production build into .output/
npm run check    # Biome lint + format check
```

The games are served from `public/static/`, which the engine's CI keeps in sync — no Rust toolchain is needed to work on the site. To try a local engine change, build an example with `wasm-pack build examples/<name> --target web --out-dir <this repo>/public/static/<name>` from the engine repository.

## Links

- [Redixel Engine Repository](https://github.com/Redixel-Team/Redixel)
- [WebGPU Implementation Status](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status)

## License

Redixel Web is distributed under the terms of the MIT License.

See [LICENSE](./LICENSE) for details.

Copyright 2026 Redixel Core Team.
