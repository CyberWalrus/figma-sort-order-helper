import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import { envBuild } from './src/shared/api/env-build';

dotenv.config();

export default defineConfig({
    css: {
        modules: {
            generateScopedName: '[local]_[hash:base64:4]',
            localsConvention: 'camelCaseOnly',
        },
    },
    define: {
        __CLIENT__: envBuild.NODE_ENV !== 'test',
        NODE_ENV: JSON.stringify(envBuild.NODE_ENV),
        VITE_TEST_SERVER_BUILD: JSON.stringify(envBuild.VITE_TEST_SERVER_BUILD),
    },
    plugins: [
        react(),
        viteSingleFile(),
        viteStaticCopy({
            targets: [{ dest: '../', rename: 'ui.html', src: './dist/index.html' }],
        }),
    ],
    resolve: {
        alias: {
            $__mocks__: resolve(__dirname, './src/__mocks__'),
            $__tests__: resolve(__dirname, './src/__tests__'),
            $app: resolve(__dirname, './src/app'),
            $assets: resolve(__dirname, './src/assets'),
            $entities: resolve(__dirname, './src/entities'),
            $features: resolve(__dirname, './src/features'),
            $pages: resolve(__dirname, './src/pages'),
            $public: resolve(__dirname, './public'),
            $shared: resolve(__dirname, './src/shared'),
            $widgets: resolve(__dirname, './src/widgets'),
        },
    },
});
