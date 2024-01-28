import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
          "hero":"url('/jeep2.webp')"
      },
      keyframes:{
        slidedown:{
          from:{
            opacity:'0',
            transform: 'translateY(-50px)' 
          },
          to:{
opacity:'1',
transform: 'translateY(0)' 
          }
        },slideup:{
          from:{
            opacity:'0',
            transform: 'translateY(50px)' 
          },
          to:{
opacity:'1',
transform: 'translateY(0)' 
          }
        }
      },
      animation:{
        'slidein1':'slidedown 2s ease forwards',
        'slidein2':'slidedown 4s ease forwards',
        'slidein3':'slideup 6s ease forwards'
      }
    },
  },
  plugins: [],
};
export default config;
