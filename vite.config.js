/**
	*  Vite configuration
	*  @see https://laravel.com/docs/9.x/vite
	*  @see https://github.com/vite-plugin/vite-plugin-dynamic-import
	*  @see https://github.com/chengpeiquan/vite-plugin-banner
	*  @see https://github.com/jeddygong/vite-plugin-progress
	*  @see https://github.com/alexeyraspopov/picocolors
	*  @see https://github.com/Ssis53/vite-plugin-zip
	*  @see https://github.com/fengxinming/vite-plugins/tree/main/packages/vite-plugin-cp
	*  @see https://github.com/pengzhanbo/vite-plugin-image-placeholder
 */

// TODO Create shell scripts for moving files (e.g. fonts) and optimizing images.

/**
 *    Imports
 * -------------------------------------------------- */
import banner from 'vite-plugin-banner';
import * as dotenv from 'dotenv';
import dynamicImport from 'vite-plugin-dynamic-import';
import laravel from 'laravel-vite-plugin';
import pkg from './package.json';
import { createLogger, defineConfig } from 'vite';
import { minify } from 'terser';
// import { viteZip } from 'vite-plugin-zip-file';

/**
 *    Variables
 * -------------------------------------------------- */
dotenv.config();
const logger = createLogger();
const loggerWarn = logger.warn;
logger.warn = (msg, options) => {
	// Ignore empty CSS files warning
	if (msg.includes('vite:css') && msg.includes(' is empty')) return;
	loggerWarn(msg, options);
};

/**
 *    Vite configuration file
 * -------------------------------------------------- */
export default defineConfig(({ command, mode, ssrBuild }) => {
	console.log(`"${process.env.MAIL_USERNAME}"`);

	const config = {
		css: {
			devSourcemap: true
		},
		customLogger: logger,
		// optimizeDeps: {
		// 	include: Object.keys(pkg.dependencies)
		// },
		plugins: [
			dynamicImport(),
			laravel({
				input: [
					'resources/styles/nks.css',
					'resources/scripts/nks.js'
				],
				refresh: true
			})
		]
	};

	// If the command is 'build', alter the default options.
	if (command === 'build') {
		// Add build options.
		// config.build = {
		// 	assetsDir: 'assets/build',
		// 	manifest: true,
		// 	minify: 'terser',
		// 	outDir: './public',
		// 	sourcemap: true,
		// 	ssr: false,
		// 	ssrManifest: true,
		// 	target: 'modules',
		// 	terserOptions: {
		// 		mangle: true,
		// 		nameCache: {},
		// 		sourceMap: true
		// 	}
		// };

		// // Add plugin to zip and store project files.
		// config.plugins.push(
		// 	viteZip({
		// 		enabled: true,
		// 		folderPath: path.resolve(__dirname, 'resources'),
		// 		outPath: path.resolve(__dirname, 'storage/builds'),
		// 		zipName: `${pkg.name.toLowerCase()}-${pkg.version}-${new Date().toISOString()}.zip`
		// 	})
		// );

		// Add plugin to create build banner.
		config.plugins.push(
			banner(`
				/**\n
				* name: ${pkg.name}\n
				* version: v${pkg.version}\n
				* author: ${pkg.author}\n
				*/`
			)
		);
	}

	return config;
});
