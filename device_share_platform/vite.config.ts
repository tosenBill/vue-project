import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'

import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import PurgeIcons from 'vite-plugin-purge-icons'

import { viteMockServe } from 'vite-plugin-mock'


// https://vitejs.dev/config/
const root = process.cwd()
function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    WindiCSS(),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        resolveStyle: (name) => {
          return `element-plus/es/components/${name.substring(3)}/style/css`
        }
      }]
    }),
    createSvgIconsPlugin({
      iconDirs: [pathResolve('src/assets/svgs')],
      symbolId: 'icon-[dir]-[name]',
      svgoOptions: true
    }),
    // PurgeIcons()
    viteMockServe({
      ignore: /^\_/,
      mockPath: 'mock',
      localEnabled: true,
      // prodEnabled: isBuild,
      injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer'

        setupProdMockServer()
        `
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/styles/variables.module.less";',
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'vue-types',
      'element-plus/es/locale/lang/zh-cn',
      'element-plus/es/locale/lang/en',
      '@iconify/iconify',
      '@vueuse/core',
      'axios',
      'qs',
      'echarts',
      'echarts-wordcloud',
      'intro.js',
      'qrcode',
      '@wangeditor/editor',
      '@wangeditor/editor-for-vue'
    ]
  }
})
