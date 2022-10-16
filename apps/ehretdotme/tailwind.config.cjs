const t = 'var(--text)';

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				ovalRoomBlue: 'var(--ovalRoomBlue)',
				railings: 'var(--railings)',
				imperial: 'var(--imperial)',
				lake: 'var(--lake-red)',
				wevet: 'var(--wevet)',
				prime: 'var(--prime)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
