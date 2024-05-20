/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#ff0000',
				secondary: '#0000ff',
				tertiary: '#00ff00',
				quaternary: '#ff00ff',
				customGray: '#b6b9c9',
				customGrayDark: '#323232',
			}
		},
	},
	plugins: [],
}
