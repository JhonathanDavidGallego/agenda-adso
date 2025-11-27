//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//export default defineConfig({
 // plugins: [react()],
//})
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Importa el plugin de Vite

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Añádelo a los plugins
  ],
});