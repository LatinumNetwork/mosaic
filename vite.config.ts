import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import path from 'path';

const packageJson = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: '/src',
            atoms: '/src/components/atoms',
            molecules: 'src/components/molecules',
        },
    },
});
