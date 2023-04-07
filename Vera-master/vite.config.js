// import { fileURLToPath, URL } from 'node:url'
import EslintPlugin from 'vite-plugin-eslint'
import StyleLintPlugin from 'vite-plugin-stylelint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const styleLintConfig = StyleLintPlugin({
  files: ['src/**/*.{vue,scss}'],
  fix: true,
})

const eslintConfig = EslintPlugin({
  fix: true,
  cache: false,
})

const autoImportConfig = AutoImport({
  resolvers: [ElementPlusResolver()],
  imports: ['vitest'],
  dts: true,
})

const componentsConfig = Components({
  resolvers: [ElementPlusResolver()],
})

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/resources" as *; @use "@/styles/vendor" as *;',
      },
    },
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue(), styleLintConfig, eslintConfig, autoImportConfig, componentsConfig],
})
