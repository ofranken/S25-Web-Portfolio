import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react()],
  base: '/s25-web-portfolio/'
})