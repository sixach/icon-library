import { COLORS } from '../utils';

export default {
	id: 'calendar',
	paths: [
		{
			d: 'M20.75 5.75H3.25v15h17.5v-15zm-15 12.5h12.5V7H5.75v11.25z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M17.542 19.917v-1.39H5.583v-9.72H4.417V5.75H3.25v15h17.5v-.833h-3.208z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M8.023 2.625c.345 0 .625.28.625.625V4.5h2.727V3.25a.625.625 0 111.25 0V4.5h2.727V3.25a.625.625 0 111.25 0V4.5h4.148c.69 0 1.25.56 1.25 1.25v15c0 .69-.56 1.25-1.25 1.25H3.25C2.56 22 2 21.44 2 20.75v-15c0-.69.56-1.25 1.25-1.25h4.148V3.25c0-.345.28-.625.625-.625zM3.25 5.75h4.148v.913H5.75a.625.625 0 00-.625.625V18.25c0 .345.28.625.625.625h12.5c.345 0 .625-.28.625-.625V7.288a.625.625 0 00-.625-.625h-1.648V5.75h4.148v15H3.25v-15zm9.375 0h2.727v.913h-2.727V5.75zm-1.25.913V5.75H8.648v.913h2.727zm-3.977 1.25H6.375v9.712h11.25V7.913h-1.023v.53a.625.625 0 11-1.25 0v-.53h-2.727v.53a.625.625 0 11-1.25 0v-.53H8.648v.53a.625.625 0 11-1.25 0v-.53zm5.227 2.837a.625.625 0 00-1.218-.198c-.236.708-.605.808-.654.821-.006.002-.007.002-.003.002a.625.625 0 100 1.25c.19 0 .406-.048.625-.153v3.278a.625.625 0 001.25 0v-5z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
