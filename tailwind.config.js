/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "0 0 15px 0 rgba(255, 255, 255, 0.1)",
            },
        },
    },
};
