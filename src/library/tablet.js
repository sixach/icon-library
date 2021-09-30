import { COLORS } from '../utils';

export default {
	id: 'tablet',
	paths: [
		{
			d: 'M5.12 3.25h13.75v17.5H5.12V3.25z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M15.901 3.25L5.12 18.344v2.406h.938l12.5-17.5H15.9zm-6.156 17.5h7.563l1.562-2.188V7.713c-2 2.932-6.688 9.8-9.125 13.038z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M5.158 2c-.711 0-1.288.577-1.288 1.288v17.424c0 .711.577 1.288 1.288 1.288h13.673c.712 0 1.289-.577 1.289-1.288V3.288c0-.711-.577-1.288-1.289-1.288H5.158zm.606 1.25a.644.644 0 00-.644.644v16.212c0 .356.288.644.644.644h12.462a.644.644 0 00.644-.644V3.894a.644.644 0 00-.644-.644H5.764z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
