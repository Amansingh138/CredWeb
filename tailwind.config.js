/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    gold: '#CA8A04',     // Premium accent
                    dark: '#0C0A09',     // Main background (OLED-ish)
                    surface: '#1C1917',  // Cards / Secondary
                    highlight: '#FDE047' // Subtle brighter gold
                }
            },
            fontFamily: {
                sans: ['"DM Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
