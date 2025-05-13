import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Changed for root GitHub Pages deployment
  optimizeDeps: {
    exclude: ['lucide-react'], // Keep if you have a specific reason
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          animations: ['@react-spring/web', 'react-tilt'],
        },
      },
    },
  },
});
