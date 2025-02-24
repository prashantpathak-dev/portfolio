import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	plugins: [daisyui],

	daisyui: {
		themes: [
			{
				mytheme: {
					base: '#FFFFFF',
					primary: '#26428B',
					secondary: '#6B7280',
					accent: '#4A86E8',
					neutral: '#000000'
				}
			}
		], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: false, // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true // Shows info about daisyUI version and used config in the console when building your CSS
	}
} satisfies Config;
