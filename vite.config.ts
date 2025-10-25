import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code for better caching
          react: ['react', 'react-dom', 'react-router-dom'],
          bootstrap: ['bootstrap', 'react-bootstrap'],
          animations: ['framer-motion', 'react-spring'],
          charts: ['chart.js', 'react-chartjs-2'],
          particles: ['@tsparticles/react', '@tsparticles/engine', '@tsparticles/basic'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  
  server: {
    port: 3000,
    open: false,
    host: false,
  },
  
  preview: {
    port: 4173,
    open: false,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'chart.js',
    ],
  },
}));
