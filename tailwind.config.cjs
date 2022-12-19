/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				Dark_cyan: "hsl(185, 75%, 39%)",
				Very_dark_desaturated_blue: "hsl(229, 23%, 23%)",
				Dark_grayish_blue: "hsl(227, 10%, 46%)",
				Dark_gray: "hsl(0, 0%, 59%)",
			},
			fontFamily: {
				ks: ["Kumbh Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
