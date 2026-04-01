import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Principal (Negro)
        'primary': '#000000', 
        
        // Títulos (Gris oscuro)
        'midnight_text': '#1A1A1A', 
        
        // Fondo sección (Gris claro)
        'header': '#F2F2F2', 
        
        // Elementos dashboard (Gris pizarra)
        'deepSlate': '#4A4A4A', 
        
        // Párrafos (Gris medio)
        'muted': '#666666',

        // Borde (Negro)
        'dark_border': '#000000',
        
        // Estado (Gris neutro)
        'Lightsuccess': '#F0F4F2',
      },
      fontSize: {
        // Tamaño 86px
        '86': '86px',
      },
    },
  },
  plugins: [],
}

export default config