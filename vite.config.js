/**
	*  Vite configuration
	*  @see https://laravel.com/docs/9.x/vite
 */

import * as path from 'path';
import banner from 'vite-plugin-banner';
import colors from 'picocolors';
import laravel from 'laravel-vite-plugin';
import pkg from './package.json';
import progress from 'vite-plugin-progress';

import { defineConfig } from 'vite';
import { viteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve(__dirname, 'resources/js/oscillator')
			}
		]
	},
	plugins: [
		progress({
			format: `Time to make this donuts... ${colors.cyan('[:bar]')}:percent (ETA: :eta)`
		}),
		laravel({
			input: [
				'resources/css/app.scss',
				'resources/js/app.js'
			],
			refresh: true
		}),
		viteImageOptimizer({}),
		banner(`
			/**
			  * name: ${pkg.name}
				* version: v${pkg.version}
		   */
		`)
	]
});
