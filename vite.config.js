import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react()],
  base: '/S25-Web-Portfolio/',
  build: {
    outDir: 'dist'
  }
})