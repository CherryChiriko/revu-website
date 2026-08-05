import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "../revu-app/src"),
      "@assets": path.resolve(__dirname, "../revu-app/src/assets"),
    },
  },
});
