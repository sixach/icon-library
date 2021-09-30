export default {
	id: 'arrow-down',
	paths: [
		{
			d: 'M6 13.5l6 6 6-6-1.59-1.591-3.285 3.284V4.5h-2.25v10.693L7.59 11.909 6 13.499z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M13 5v10.68a1.733 1.733 0 01-.341-.165c-.459-.278-.659-.817-.659-1.353V5h1z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M18.354 13.146a.5.5 0 010 .707l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.707l1.591-1.59a.5.5 0 01.707 0l2.43 2.43V4.5a.5.5 0 01.5-.5h2.25a.5.5 0 01.5.5v9.486l2.432-2.43a.5.5 0 01.707 0l1.59 1.59zm-1.061.354l-.884-.884-2.93 2.931a.5.5 0 01-.854-.354V5h-1.25v10.193a.5.5 0 01-.854.353l-2.93-2.93-.884.884L12 18.793l5.293-5.293z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
