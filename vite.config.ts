import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/jabisim-seonwon/",
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        format: 'es',
        manualChunks: undefined,
      },
    },
  },
});
