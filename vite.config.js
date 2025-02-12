import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { webfontDownload } from 'vite-plugin-webfont-dl';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          screens: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
          }
        }
      }
    }),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
    ])
  ],
  define: {
    'process.env': process.env
  }
});
