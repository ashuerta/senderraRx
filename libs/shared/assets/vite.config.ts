/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/libs/shared/assets',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../../dist/libs/shared/assets',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    assetsInlineLimit: 0,
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'shared-assets',
      //fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
  experimental: {
    renderBuiltUrl(filename: string, { hostType }: { hostType: 'js' | 'css' | 'html', type: 'public' | 'asset' }) {
      if (hostType === 'js') {
        return { runtime: `window.__toCdnUrl(${JSON.stringify(filename)})` }
      } else {
        return { relative: true }
      }
    }
  }
});
