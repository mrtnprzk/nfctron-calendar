/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
    ],
    theme: {
        extend: {
            colors: {
                nfcPurpleDark: '#25196A',
                nfcPurple: '#7F46DB',
                nfcPurpleLight: '#F7F5FF',
                nfcCyan: '#03D5DE',
                nfcGreen: '#1FE8AC',
            },
        },
    },
    plugins: [],
}
