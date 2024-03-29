import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from "rollup-plugin-import-css";

import packageJson from './package.json' assert { type: 'json' };

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
      css() 
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
