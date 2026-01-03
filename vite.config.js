import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // Assure que les assets sont servis correctement
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
