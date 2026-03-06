import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: `/affirmly-privacy/`,
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    port: 5173,
  },
})
