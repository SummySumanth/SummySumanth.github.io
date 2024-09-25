// Libs
import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';


// Config Export
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],  // Automatically resolve these extensions
  },
  server: {
    port: 5001,
    strictPort: true,
    open: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser global polyfills
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname,'./app/view/build/index.html'),
      plugins: [rollupNodePolyFill()],
    },
    outDir: 'dist',
    cssCodeSplit: true,
    sourcemap: true,
    
  },
})
