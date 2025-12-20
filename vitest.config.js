import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    css: true,
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.vscode/**",
      "**/.cursor/**",
      "**/extensions/**",
      "**/AppData/**",
      "**/Local Settings/**",
      "**/Local/**",
    ],
    root: process.cwd(),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
