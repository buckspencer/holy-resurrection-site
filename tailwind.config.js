/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // HRAOC Brand Colors
        blue: '#365A69',
        red: '#5B1924',
        rust: '#945643',
        cream: '#F8F4F0',
        green: '#728158',
        gold: '#E6BD7C',
        black: '#292932',
        
        // Legacy colors (kept for backwards compatibility)
        primary: '#5B1924', // Updated to brand red
        'primary-dark': '#292932', // Updated to brand black
        secondary: '#E6BD7C', // Updated to brand gold
        sage: '#728158', // Updated to brand green
        
        // Update bg-sage references to use green instead
        'sage/20': '#72815833',
        navy: '#365A69', // Updated to brand blue
      },
      fontFamily: {
        // HRAOC Brand Typography
        heading: ['Rumble Brave', 'Cinzel', 'serif'], // Primary: Rumble Brave (Adobe) with Cinzel fallback
        body: ['Quando', 'serif'], // Secondary: Quando (available)
        quote: ['Amoresa Aged', 'Great Vibes', 'serif'], // Quote font with Great Vibes fallback
        
        // Legacy fonts (kept for backwards compatibility)
        legacy: ['Cinzel', 'serif'],
        'legacy-body': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
