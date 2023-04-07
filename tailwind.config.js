/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                nfcPurple: '#25196B',
                nfcCyan: '#03D5DE',
            },
        },
    },
    plugins: [],
}
