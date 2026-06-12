import { defineConfig } from 'tsup'
import cssModulesPlugin from 'esbuild-plugin-css-modules'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,

  esbuildPlugins: [
    cssModulesPlugin({
      inject: true,
    }),
  ],
})