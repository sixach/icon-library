import { COLORS } from '../utils';

export default {
	id: 'search',
	paths: [
		{
			d:
				'M14.978 13.655a6.875 6.875 0 10-1.32 1.32l-.002.003 6.118 6.123a.937.937 0 101.327-1.326l-6.12-6.123-.003.003zM9.5 14.5a5 5 0 100-10 5 5 0 000 10z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M9.57 3.25A6.169 6.169 0 004.5 5.903a6.174 6.174 0 018.596 8.597A6.177 6.177 0 009.57 3.25z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M9.5 3.25a6.25 6.25 0 100 12.5 6.25 6.25 0 000-12.5zM2 9.5a7.5 7.5 0 1113.794 4.08l5.749 5.753a1.563 1.563 0 11-2.21 2.21l-5.748-5.752A7.5 7.5 0 012 9.5zm12.58 5.518c.153-.141.3-.289.441-.442l5.638 5.64a.313.313 0 01-.442.443l-5.637-5.64zM13.25 9.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm1.25 0a5 5 0 11-10 0 5 5 0 0110 0z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
