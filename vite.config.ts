import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
    strictPort: true,
    open: true,
    proxy: {
      '/api': 'http://localhost:3000',    
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],  // Automatically resolve these extensions
  },
  root: './app',  // Root directory
  build: {
    rollupOptions: {
      input: './app/index.html',  // Entry point
    },
    outDir: './../dist',  // Output directory
    emptyOutDir: true,  // Empty output directory before building
    assetsDir: './assets',  // Assets directory
    manifest: true,  // Generate manifest.json
    cssCodeSplit: true,  // Enable CSS code splitting
    sourcemap: true,  // Enable sourcemaps
  }
})