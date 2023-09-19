import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@stores': path.resolve(__dirname, 'src/stores'),
            '@helpers': path.resolve(__dirname, 'src/helpers'),
        },
    },
});
