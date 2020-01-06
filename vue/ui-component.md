### 什么是webpack模块
ES6 import 语句  
CommonJS require() 语句
AMD define 和 require 语句
css/sass/less 文件中的 @import 语句
样式(url(...))或 HTML 文件(<img src=...>)中的图片链接(image url)

### 如何二次封装一个组件库
```js
/** 以 element ui 的 button 为例**/

// button/MyButton.vue
<template>
  <p>my button</p>
  <el-button></el-button>
</template>

<script>
import { Button } from "elment-ui"
export default {
  components: {
    Button
  }
}
</script>

//如何将 MyButton 变为全局？

// button/index.js
import MyButton from "./MyButton"
export default Buttons = function(Vue, options) {
  Vue.component("my-button", MyButton)
}

//main.js
import Vue from "Vue"
import Buttons "button/index.js"
Vue.use(Buttons)
```

### 如何搭建自己的组件库


### 如何将组件发布为npm包
打包的项目包括两部分：组件库，组件库的文档。可以不对组件库进行打包，直接将其源码发布为npm包，这样用户通过npm安装后，可以在node_modules中获取组件的源码。最好对组件库进行打包，需要配置webpack。
##### 完整加载 vs 局部加载; npm 安装 vs 头部脚本引入; 开源 vs 公司内部仓库
```js
完整加载就是一次引入所有组件并注册好，
可以写一个Vue插件，在插件提供的install方法中将所有组件注册为全局组件，然后在Vue的入口文件中使用Vue.use对插件进行安装。

// ui-component/index.js
import Button from './components/button'
import Icon from './components/icon'

export {
  Button,
  Icon
}

const adminUi = {
  Button,
  Icon
}

adminUi.install = function (Vue, options = {}) {
  // Vue.component('cu-button', Button)
  // Vue.component('cu-icon', Icon)
  Object.keys(adminUi).forEach(key => {
    Vue.component(`base-${key.toLowerCase()}`, key)
  })
}
export default adminUi

// webpack.config.js
// https://www.webpackjs.com/guides/author-libraries/
{
  name: "ui-component",
  entry: './ui-component/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ui-component.js',
    library: 'ui-component',
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
}

webpack 打包后会生成 "dist/ui-component.js"
通过 npm init 生成 npm 包的 package.json, package.json 中 main 的路径指向 "dist/ui-component.js"。
最后配置 package.json 中的 files 属性, 来配置我们想要发布到 npm 上的文件路径，我们这里将用户引用我们的组件库可能用到的所有文件都放进来。

局部加载就是用户可以加载单个组件，
所以需要对所有组件单独进行打包，以每个组件的出口文件(可能是index.js)为打包入口，将每个组件都打包为一个模块放到dist中的lib文件夹。
每个组件打包后都会生成一个js文件和一个css文件，局部加载时每次都需要引入css文件太麻烦了，
解决方法：1. 推荐一次性引入完整加载打包生成的css文件， 2. 推荐用户使用 "babel-plugin-component"
```
