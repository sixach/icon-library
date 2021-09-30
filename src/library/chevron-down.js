export default {
	id: 'chevron-down',
	paths: [
		{
			d: 'M12 15.591l-6-6L7.59 8l3.285 3.284L12 12.34l1.125-1.056L16.409 8 18 9.59l-6 6.001z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M7.923 8.323l4.42 4.42a1 1 0 01-1.415 0L7.216 9.03l.707-.708z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M18.354 9.237a.5.5 0 010 .707l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.707l1.591-1.59a.5.5 0 01.707 0l3.279 3.278.777.73.777-.73 3.279-3.279a.5.5 0 01.707 0l1.59 1.591zm-1.061.354l-.884-.884-2.93 2.931-.012.011-1.125 1.057a.5.5 0 01-.684 0l-1.126-1.058-.01-.01-2.931-2.93-.884.883L12 14.884l5.293-5.293z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
