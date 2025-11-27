// Configuración de PostCSS para Tailwind v3.4 (estable)
//export default {
  //plugins: {
    // Registra Tailwind como plugin de PostCSS
   // tailwindcss: {},
    // Autoprefixer agrega compatibilidad de prefijos CSS
    //autoprefixer: {},
  //},
//};
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    // 'autoprefixer': {}, // Esto es opcional en v4
  },
};

