export default {
	id: 'texarea',
	paths: [
		{
			d: 'M5 7h14v10H5V7z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M5 8h14V7H5v1z',
			attrs: {
				fill: '#FFF',
				opacity: '.25',
			},
		},
		{
			d: 'M4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7zm1 0v10h14V7H5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: '#1E1E1E',
			},
		},
	],
};
