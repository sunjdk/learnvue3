源码调试步骤


1. 首先要从github 上下载源代码
2. yarn install 安装依赖
3. 在package.json 中 "dev": "node scripts/dev.js --sourcemap",    加上 --sourcemap 参数，这样npm run dev 后编译出的源代码才可以调试
4. 项目跑起来以后就可以在项目的/packages/vue/dist目录下找到编译后的vue.global.js文件，然后我们只需要在html文档中引入这个文件就可以体验vue3了