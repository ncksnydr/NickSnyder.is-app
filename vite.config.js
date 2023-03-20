// TODO Create and connect to a basic database.

import banner from 'vite-plugin-banner';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
import babel from 'vite-plugin-babel';

export default defineConfig({
    plugins: [

        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        // vue({
        //     template: {
        //         transformAssetUrls: {
        //             // The Vue plugin will re-write asset URLs, when referenced
        //             // in Single File Components, to point to the Laravel web
        //             // server. Setting this to `null` allows the Laravel plugin
        //             // to instead re-write asset URLs to point to the Vite
        //             // server instead.
        //             base: null,

        //             // The Vue plugin will parse absolute URLs and treat them
        //             // as absolute paths to files on disk. Setting this to
        //             // `false` will leave absolute URLs un-touched so they can
        //             // reference assets in the public directory as expected.
        //             includeAbsolute: false,
        //         },
        //     },
        // }),
        // babel(),
    //     banner(
    //   `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`
    // ),
    ],
});
