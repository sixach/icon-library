import { COLORS } from '../utils';

export default {
	id: 'appointment',
	paths: [
		{
			d:
				'M.5 8h23V6c0-1-1-2.5-3-2.5H3C2 3.5.5 3.5.5 8Zm11.328 3c3.03 0 3.448 2.667 3.448 4.444 0 .816.416 1.26.84 1.71.438.467.884.942.884 1.846H7c0-.938.384-1.48.747-1.992.325-.458.632-.892.632-1.564 0-1.617.345-4.444 3.449-4.444Z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d:
				'M12 14.667c0-1.067-1.154-2 0-3.667-1.923 0-2.692 1-3.077 2.333-.385 1.334 0 1.667-.77 3C7.539 17.4 7 18 7 19h3.077c0-1.333 1.923-2.333 1.923-4.333Z',
			attrs: {
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M4 1.5a1.5 1.5 0 1 1 3 0V3h10V1.5a1.5 1.5 0 0 1 3 0V3h1a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h1V1.5Zm16 2.75V5.5a1.5 1.5 0 0 1-3 0V4.25H7V5.5a1.5 1.5 0 1 1-3 0V4.25H3A1.75 1.75 0 0 0 1.25 6v1.75h21.5V6A1.75 1.75 0 0 0 21 4.25h-1ZM1.25 9v12c0 .966.784 1.75 1.75 1.75h18A1.75 1.75 0 0 0 22.75 21V9H1.25Zm5.302 1.854a.625.625 0 0 0-.182-1.236c-2.067.304-3.758 2.005-4.062 4.226a5.025 5.025 0 0 0 .738 3.4.625.625 0 0 0 1.052-.676 3.771 3.771 0 0 1-.552-2.555c.232-1.69 1.51-2.938 3.006-3.159Zm2.452 4.59c0-.785.088-1.769.49-2.539.195-.374.458-.686.815-.906.355-.22.84-.374 1.519-.374.663 0 1.143.145 1.497.356.353.211.617.51.814.873.407.748.512 1.73.512 2.59 0 1.066.568 1.67.989 2.116l.042.046c.255.27.455.495.574.77H7.707c.1-.35.28-.626.493-.927l.068-.096c.32-.447.736-1.032.736-1.909Zm.446 4.181H7A.625.625 0 0 1 6.375 19c0-1.087.439-1.753.804-2.271l.028-.04c.348-.493.547-.775.547-1.245 0-.831.085-2.07.632-3.117a3.515 3.515 0 0 1 1.264-1.391c.583-.36 1.304-.56 2.178-.56.851 0 1.56.187 2.137.532.577.344.986.823 1.272 1.35.56 1.03.664 2.27.664 3.187 0 .557.254.837.693 1.305.442.471 1.031 1.102 1.031 2.25 0 .345-.28.625-.625.625h-2.45a2.626 2.626 0 0 1-5.1 0Zm1.325 0a1.375 1.375 0 0 0 2.45 0h-2.45ZM7.8 11.833a.625.625 0 0 1-.435.77 2.376 2.376 0 0 0-1.135 3.872.625.625 0 1 1-.932.833 3.626 3.626 0 0 1 1.733-5.91.625.625 0 0 1 .77.435Zm9.601-1.591a.625.625 0 0 0 .497.73c1.251.24 2.413 1.482 2.643 3.227.127.962-.06 1.865-.455 2.57a.625.625 0 1 0 1.09.61c.532-.95.766-2.125.605-3.344-.287-2.167-1.765-3.93-3.648-4.29a.625.625 0 0 0-.732.497Zm-.587 2.355a.625.625 0 1 1 .372-1.194c1.446.45 2.439 1.904 2.439 3.553 0 .925-.31 1.779-.831 2.434a.625.625 0 0 1-.978-.78c.343-.43.559-1.008.559-1.654 0-1.17-.7-2.092-1.56-2.36Z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};