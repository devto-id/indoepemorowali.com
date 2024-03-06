import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': {
                    DEFAULT: '#048ABF',
                        50: '#CEF0FE',
                        100: '#BAEAFE',
                        200: '#92DFFD',
                        300: '#6AD3FC',
                        400: '#42C7FB',
                        500: '#1ABBFA',
                        600: '#05A7E7',
                        700: '#048ABF',
                        800: '#036288',
                        900: '#023B51',
                        950: '#012736'
                  },
            },
        },
    },

    plugins: [forms],
};
