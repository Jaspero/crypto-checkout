import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import replace from '@rollup/plugin-replace';
import filesize from 'rollup-plugin-filesize';
import externalGlobals from 'rollup-plugin-external-globals';

const config = {
  input: 'lib/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    replace({'Reflect.decorate': 'undefined', preventAssignment: true}),
    minifyHTML(),
    resolve(),
    externalGlobals({
      'qr-code-styling': "QRCodeStyling"
    }),
    terser({
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    filesize(),
  ]
};

export default config;
