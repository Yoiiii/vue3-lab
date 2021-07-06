import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vitePluginImport from 'vite-plugin-babel-import'

// https://vitejs.dev/config/
export default ({mode})=> defineConfig({
  plugins: [
    vue(),
    vitePluginImport([
      {
        libraryName: 'element-plus',
        libraryDirectory: 'es',
        style(name) {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      }
    ])
  ],
  resolve:{
    alias:{
      '~':path.resolve(__dirname,'./'),
      '@':path.resolve(__dirname,'src')
    },
    extensions:['.vue','.js','jsx','.json']
  },
  //base:mode =='development' ? './' :(mode=='beta' ? '//s.baidu.com/beta/xxx' :'//s.baidu.com/release/xxx')//发布后静态资源路径
  base:'./',//静态资源放在assets中
  //proxy 代理接口解除跨域
  server:{
    proxy:{
      '/api':{
        target:'',//代理目标接口，当请求路径为/api,映射到该地址，
        changeOrigin:true,
        rewrite:path => path.replace(/^\/api/,'')// 重新,将/api去除
      }
    }
  }
})
