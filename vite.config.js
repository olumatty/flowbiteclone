import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tailwindConfig from "./tailwind.vite.js"; // ✅ Import your Tailwind config

export default defineConfig({
  plugins: [react(), tailwindcss(tailwindConfig)], // ✅ Pass Tailwind config here
  assetsInclude: ["**/*.PNG"],
});
