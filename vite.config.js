import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'brotliCompress' }) // Enable Gzip/Brotli compression
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext', // Optimize for modern browsers
    minify: 'esbuild', // Faster minification than Terser
    sourcemap: false, // Disable sourcemaps in production for smaller builds
    chunkSizeWarningLimit: 500, // Avoid warnings for large chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor libraries
          }
        },
      },
    },
  },
  server: {
    fs: {
      strict: false, // Prevent issues with external files
    },
    host: true, // Enable access via LAN
    port: 3000, // Change as needed
    hmr: {
      overlay: false, // Disable error overlay for a better dev experience
    },
  },
});
