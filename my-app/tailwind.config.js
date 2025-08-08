/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        foreground: 'hsl(var(--foreground))',
        background: 'hsl(var(--background))',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
      },
      animation: {
        // Add your custom animations here if any
      },
      keyframes: {
        // Define your custom keyframes here if any
      },
    },
  },
  plugins: [],
};
