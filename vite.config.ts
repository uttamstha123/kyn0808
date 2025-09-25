import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map alias to project root so imports like "@/components/..." resolve to the root "components" dir
      "@": path.resolve(__dirname, "."),
    },
  },
})
