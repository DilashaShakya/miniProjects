/** @type {import('tailwindcss').Config} */ 
module.exports = {
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
        customPurple: '#201c44',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], 
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
