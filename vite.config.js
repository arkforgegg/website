// vite.config.js
import react from "@vitejs/plugin-react";
import tailwindcss from "vite-plugin-tailwind";

export default {
  plugins: [react(), tailwindcss()],
};
