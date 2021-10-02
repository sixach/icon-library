import { COLORS } from '../utils';

export default {
	id: 'website',
	paths: [
		{
			d: 'M19.533 3.8H2.8v3.862h16.733V3.8zm1.287 16.733v-6.436l-3.861-3.861-3.861 3.861v6.436h7.722z',
			attrs: {
				fill: COLORS.SHAPE_FILL,
			},
		},
		{
			d: 'M4.087 17.959V3.8H2.8v14.159h1.287zm7.08 0v-3.218l3.861-3.861.644.643-2.575 2.574v3.862h-1.93zm7.08-1.287h-2.575v3.861h2.574v-3.861z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BACKGROUND_FILL,
				opacity: COLORS.SHAPE_BACKGROUND_OPACITY,
			},
		},
		{
			d:
				'M2.8 3.175a.625.625 0 00-.625.625v14.159c0 .345.28.625.625.625h9.672v1.95c0 .345.28.624.626.624h7.722c.346 0 .625-.28.625-.625v-4.927l.22.22a.625.625 0 10.885-.883l-2.392-2.392V3.8a.625.625 0 00-.625-.625H2.8zm16.294 10.08l-.005-.006-2.13-2.13-3.236 3.237v5.552h1.324v-3.236c0-.345.28-.625.625-.625h2.574a.625.625 0 110 1.25h-1.95v2.611h3.9v-5.552l-1.102-1.101zm-.186-1.954V8.287H3.425v9.047h9.047v-1.728l-.22.22a.625.625 0 11-.884-.883l5.149-5.15a.625.625 0 01.884 0l1.507 1.508zm0-4.264H3.425V4.425h15.483v2.612z',
			attrs: {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				fill: COLORS.SHAPE_BORDER,
			},
		},
	],
};
