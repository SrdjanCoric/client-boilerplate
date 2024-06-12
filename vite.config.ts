/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupTests.ts"],
  },
  // // proxy setup
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3001",
  //     },
  //   },
  // },
});
