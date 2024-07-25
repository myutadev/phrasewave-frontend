module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'custome-primary': '#5B49C4',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
