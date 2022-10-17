module.exports = {
	purge: {
		enabled: false,
	},
	theme: {
		extend: {
			maxWidth: {
				'32': '8rem',
				wrapper: '960px',
				'wrapper\-sm': '820px',
			},
			minWidth: {
				'64': '32rem',
				'40': '20rem',
			},
			maxHeight: {
				'16': '4rem',
				'32': '8rem',
			},
			fontSize: {
				'7xl': '5rem',
				'8xl': '6rem',
			},
			borderWidth: {
				'1': '1px',
			},
			screens: {
				'xs': {'max': '639px'}
			},
			lineHeight: {
				'12': '3rem',
			}
		},
	},
	variants: {
		borderWidth: ['responsive', 'hover', 'focus'],
	},
	plugins: []
}
