/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2563eb', // Tailwind's blue-600 for branding
                accent: '#f59e0b',  // amber-500
            },
        },
    },
    plugins: [],
}
