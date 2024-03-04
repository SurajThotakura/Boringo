/** @type {import('tailwindcss').Config} */
import { colors } from './src/constants/colors'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: colors,
		fontFamily: {
			sans: ['IBM Plex Mono', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
