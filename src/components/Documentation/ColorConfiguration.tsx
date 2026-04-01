import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Valores sacados directamente de tu componente ColorConfiguration
        'primary': '#0057ff',
        'midnight_text': '#001b50',
        'Lightsuccess': '#e7f8f2',
        'deepSlate': '#6493ea',
        
        // Colores de apoyo para bordes y fondos que se ven en tu código
        'dark_border': '#111827', 
        'muted': '#64748b',
        'header': '#f0f7ff', // El fondo azul clarito del banner
      },
      fontSize: {
        // Para que la clase text-86 que tienes en el Banner funcione
        '86': '86px',
      },
    },
  },
  plugins: [],
}

export const ColorConfiguration = () => {
  return (
    <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="color-configuration">
        <h4 className="text-2xl font-semibold mt-10 text-black" >Color Configuration</h4>
        <p className="text-base text-black/70 font-normal mt-2">To update the color palette of the template, you need to open the <code className="text-sm text-black/70 font-semibold bg-gray-200 p-1 rounded-md">tailwind.config.ts</code> file and update the color configuration.</p>
    </div>
  )
}

export default config