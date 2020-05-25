import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy';

const baseConfig = createSpaConfig({
	developmentMode: process.env.ROLLUP_WATCH === 'true',
	injectServiceWorker: false,
});

export default merge(baseConfig, {
	input: './index.html',
	plugins: [
		copy({
			targets: [{ src: 'assets/**/*', dest: 'dist/assets' }],
			// set flatten to false to preserve folder structure
			flatten: false,
		}),
	],
});