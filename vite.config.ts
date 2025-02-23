import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8888',
                changeOrigin: true
                // rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/graphql': {
                target: 'http://localhost:8888',
                changeOrigin: true
                // rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
});
