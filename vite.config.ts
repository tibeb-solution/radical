import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["sb-5yi6ohvd9hsa.vercel.run"],
  },
});
