import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      // Allow CodeSandbox preview host
      "p3ltk6-5173.csb.app",

      // You can also allow all dynamic subdomains (safer for dev environments)
      ".csb.app"
    ],
    host: true, // Enables external access
    port: 5173
  }
});
