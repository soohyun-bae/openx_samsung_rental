import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/form-submissions": {
        target: "https://openx-form-admin.vercel.app",
        changeOrigin: true,
      },
      "/api/form-config": {
        target: "https://openx-form-admin.vercel.app",
        changeOrigin: true,
      },
    },
  },
});
