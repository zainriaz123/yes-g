
import type { Config } from "tailwindcss";

import { PluginAPI } from "tailwindcss/types/config";
  import plugin from "tailwindcss";
function addvaribleforcolors({addBase, theme }: PluginAPI){
  const allColors =theme('colors',{}) ||{} ;
  const newVars:Record<string,string>={};
Object.entries(allColors).forEach(([key,value])=>{
  if(typeof value=== 'string'){
    newVars[`--&{key}`]=value;
  }
  else if (typeof value ==='object'&& value !==null){
    Object.entries(value).forEach(([subkey,subValue]) => {
if(typeof subValue === 'string'){
  newVars[`--${key}-${subkey}`]=subValue;
}
    });
  }
});
addBase({
  'root':newVars,
})
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
      
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
     

      keyframes: {
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
          
  
        
        },
      },

    },
  },
  plugins: [addvaribleforcolors ],
};
const links = [
  { url: 'https://stripe.com', name: 'Stripe', id: 1 },
  { url: 'https://stripe.com', name: 'Stripe Duplicate', id: 2 },
];


export default config;
