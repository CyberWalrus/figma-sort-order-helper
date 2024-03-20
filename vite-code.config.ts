import dotenv from 'dotenv';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

dotenv.config();

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                code: resolve(__dirname, './code/index.ts'), // Убедитесь, что здесь используется __dirname
            },
            output: {
                // Настройте шаблон для имени файла - в данном случае без хеша
                entryFileNames: `[name].js`,
            },
        },
    },
    plugins: [
        viteStaticCopy({
            targets: [{ dest: '../', rename: 'code.js', src: './dist/code.js' }],
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
