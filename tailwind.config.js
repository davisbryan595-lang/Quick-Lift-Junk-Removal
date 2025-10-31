/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "var(--primary-yellow, #ffc008)",
        "accent-gold": "var(--accent-gold, #ff9908)",
        "primary-black": "var(--primary-black, #000000)",
        "accent-blue": "var(--accent-blue, #43b0d6)",
        "foreground": "var(--foreground, #020202)",
      },
    },
  },
  plugins: [],
}