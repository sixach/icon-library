import { COLORS } from '../utils';

export default {
	id: 'faq',
	paths: [
		{
			d: 'M12 21.375a9.375 9.375 0 100-18.75 9.375 9.375 0 100 18.75z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M13.25 20.125a9.375 9.375 0 01-7.224-15.35 9.375 9.375 0 1013.198 13.2 9.338 9.338 0 01-5.974 2.15',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M12 3.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm8.56-3.437c-.31.354-.435.792-.435 1.102a.625.625 0 11-1.25 0 3 3 0 01.744-1.926c.542-.617 1.378-1.051 2.528-1.051 1.204 0 1.98.558 2.43 1.23a3.34 3.34 0 01.548 1.747c0 .374-.06.789-.288 1.266-.222.466-.59.965-1.163 1.538-.518.518-.776.876-.907 1.134-.12.238-.142.407-.142.585v.624a.625.625 0 11-1.25 0v-.624c0-.338.053-.707.277-1.15.215-.423.573-.888 1.138-1.453.51-.51.777-.895.918-1.192.136-.283.167-.509.167-.728 0-.2-.075-.66-.337-1.052-.237-.354-.638-.675-1.391-.675-.808 0-1.295.291-1.588.625zM13.25 17a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
