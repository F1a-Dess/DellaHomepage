/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold": "#F79F1A",
        "apple-green": "#046E1B",
        "dire-wolf": "#292727",
        "2b" : "#2B2B2B",
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
      textShadow: {
        'md': '2px 2px 4px rgba(0, 0, 0, 0.1)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },

    container: {
      center: true,
      padding: "2rem",
    },

    screens: {
      sm: "640px", // Tablet
      md: "768px", // Small Desktop
      lg: "1024px", // Large Desktop
      xl: "1280px", // Extra Large Desktop
      '2xl': "1536px", // Ultra Wide Desktop
    },
  },
  plugins: [],
}

