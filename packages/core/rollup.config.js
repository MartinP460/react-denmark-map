/* eslint-disable no-restricted-imports */
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias'
import { dts } from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import path from 'path'
import packageJson from './package.json' assert { type: 'json' }

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.tsx', '**/*.stories.tsx'],
        declaration: true,
        declarationDir: 'dist'
      }),
      postcss(),
      terser(),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve(path.resolve(__dirname), 'src')
          }
        ]
      })
    ]
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts(),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve('./dist/esm')
          }
        ]
      })
    ],
    external: [/\.css$/]
  }
]

export default config
