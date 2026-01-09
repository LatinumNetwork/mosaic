import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import dts from 'rollup-plugin-dts';
import css from 'rollup-plugin-import-css';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = JSON.parse(
  fs.readFileSync(new URL('./package.json', import.meta.url))
);

const globals = [...Object.keys(packageJson.peerDependencies || {})];

export default [
  {
    input: 'src/index.ts',
    external: globals,
    output: {
      file: packageJson.main,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: 'namespace',
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      css(),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
