import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import packageJson from "./package.json" with { type: "json" };

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/infrastructure/router/routes",
      generatedRouteTree: "./src/infrastructure/router/routeTree.gen.ts",
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    imagetools(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  define: {
    "import.meta.env.VITE_APP_VERSION": JSON.stringify(packageJson.version),
  },
});
