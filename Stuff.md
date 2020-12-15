#### javascript 的内存管理和栈堆队列的理解
内存生命周期：分配你所需要的内存，使用分配到的内存进行读写等操作，释放不需要的内存。

2012年之前使用的是内存回收算法是“引用计数垃圾收集”，判断对象是否回收的依据是对象有没有其他对象引用到它，如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。

从2012年起，所有现代浏览器都使用了标记-清除垃圾回收算法。这个算法假定设置一个叫做根（root）的对象（在Javascript里，根是全局对象）。定期的，垃圾回收器将从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象……从根开始，垃圾回收器将找到所有可以获得的对象和所有不能获得的对象。所有不能获得的对象都将被回收。

#### linux用netstat查看服务及监听端口
[root@localhost ~]# netstat -nlp

netstat命令各个参数说明如下：

-t : 指明显示TCP端口

-u : 指明显示UDP端口

-l : 仅显示监听套接字(所谓套接字就是使应用程序能够读写与收发通讯协议(protocol)与资料的程序)

-p : 显示进程标识符和程序名称，每一个套接字/端口都属于一个程序

-n : 不进行DNS轮询(可以加速操作)

即可显示当前服务器上所有端口及进程服务，于grep结合可查看某个具体端口及服务情况··
```js
[root@localhost ~]# netstat -nlp |grep LISTEN   //查看当前所有监听端口·
[root@localhost ~]# netstat -nlp |grep 80   //查看所有80端口使用情况·
[root@localhost ~]# netstat -an | grep 3306   //查看所有3306端口使用情况·

windows下：netstat -ano|findstr "8080"

mac下：lsof -i:3000
```

#### 连接到服务器和上传文件的工具(需要用户名、密码，22端口就是ssh端口， telnet（端口 23）和 ftp（端口21）)
1. WinSCP + PuTTY
2. Xshell + Xftp

#### 如何自定义滚动条
```css
 /* 设置垂直滚动条的宽度和水平滚动条的高度 */
  body::-webkit-scrollbar{
    width: 8px;
    height: 8px;
  }
  /* 设置滚动条的滑轨 */
  body::-webkit-scrollbar-track {
    background-color: white;
  }
  /* 滑块 */
  body::-webkit-scrollbar-thumb {
    background-color: #127795;
    border-radius: 2px;
  }
  /* 滑轨两头的监听按钮 */
  body::-webkit-scrollbar-button {
    background-color: #127795;
    display: none;
  }
  /* 横向滚动条和纵向滚动条相交处尖角 */
  body::-webkit-scrollbar-corner {
    /*background-color: black;*/
  }
  }
```

#### 浏览器接入摄像头拍照，对图片进行检验后上传到服务器
使用的是getUserMedia.js插件，对于chrome, firefox, opera具有MediaDevices.getUserMedia()接口的，可以直接使用，对于IE则要使用flash作为fallback，成功打开摄像头看到视频流后，则可以使用canvas元素将像素放置在上面，也即拍照，然后可以使用canvas的toDataURL()将其转化为base64图片格式，或者使用toBlob()将其转化为文件，然后可以直接使用ajax上传到服务器。


#### webpack和gulp/grunt的区别
其实Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种工具，能够优化前端的工作流程，而WebPack是一种模块化的解决方案，Webpack的优点使得Webpack可以替代Gulp/Grunt类的工具。

Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，这个工具之后可以自动替你完成这些任务。

Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最好打包为一个浏览器可识别的JavaScript文件。


#### node作为中间层的意义
1. 提出前后端分离、是为了更好的解决项目的耦合度、不在互相等待、不再互相依赖，加入node这一层其实是为了更好的解耦。
2. 浏览器上做运算、做分组、以及一系列操作是一定会影响性能的、尤其数据量很大的情况。node这一层通常是由前端来做、node调用java等后台提供的接口、将数据再封装、拓展、形成自己要的结构render到客户端。
3. 前端 -> node 中间件 -> py 服务。数据源接口通常不含业务逻辑，nodejs可以代理异步请求，由中间件根据业务逻辑从数据源的各种接口拿到数据后拼成最终形态返回给前端，以减少前端的请求数和数据组装压力。这是用node 做中间件的目的。
4. 基于MVC框架，前端负责view层和controller层，后端负责model数据和业务层


#### cookie和session和token记住用户状态（某些页面需要用户登录后并具有一定的权限才可以访问）
1. session 和 cookie 和 token 都是针对http协议无状态的局限性而提出的一种保持客户端和服务器间保持会话连接状态的机制
2. 会出现一种情况：当前token失效了，但是token依然保存在本地。这个时候去访问需要登录权限的路由时，应该让用户重新登录(通过访问API接口返回401作为判断将路由重定位到登录页，这里有一个问题，该页面至少要调用一个API接口)
3. 路由拦截，即判断cookie或session或token是否存在，不管其是否有效，只要不存在就跳转到登录页。
4. session的中文翻译是“会话”，当用户打开某个web应用时，便与web服务器产生一次session。服务器使用session把用户的信息临时保存在了服务器上，用户离开网站后session会被销毁。这种用户信息存储方式相对cookie来说更安全，可是session有一个缺陷：如果web服务器做了负载均衡，那么下一个操作请求到了另一台服务器的时候session会丢失。
5. token的意思是“令牌”，是用户身份的验证方式，最简单的token组成:uid(用户唯一的身份标识)、time(当前时间的时间戳)、sign(签名，由token的前几位+盐以哈希算法压缩成一定长的十六进制字符串，可以防止恶意第三方拼接token请求服务器)。
6. token不存在sessionId的负载均衡问题，后台是用CPU的计算能力来换取sessionId内存，只要将token计算处理的签名跟token所显示的签名一致，就认为是处于相同的会话。


#### http状态码
1. 100 Continue：服务器仅接收到部分请求，但是一旦服务器并没有拒绝该请求，客户端应该继续发送其余的请求。
2. 101 Switching Protocols：服务器转换协议：服务器将遵从客户的请求转换到另外一种协议。
3. 204 No Content：没有新文档。浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的。
4. 301 Moved Permanently：所请求的页面已经转移至新的url。
5. 304 Not Modified：服务器告诉客户，原来缓冲的文档还可以继续使用。
6. 401 Unauthorized：被请求的页面需要用户名和密码。
7. 403 Forbidden：对被请求页面的访问被禁止。
8. 405 Method Not Allowed：请求中指定的方法不被允许。
9. 408 Request Timeout：请求超出了服务器的等待时间。
10. 414 Request-url Too Long：由于url太长，服务器不会接受请求。当post请求被转换为带有很长的查询信息的get请求时，就会发生这种情况。
11. 500 Internal Server Error：请求未完成。服务器遇到不可预知的情况。
12. 502 Bad Gateway：请求未完成。服务器从上游服务器收到一个无效的响应。
13. 503 Service Unavailable：请求未完成。服务器临时过载或当机。
14. 504 Gateway Timeout：网关超时。


#### ES6箭头函数跟ES5函数的区别
1. 普通function函数和箭头函数的行为有一个微妙的区别，箭头函数没有它自己的this值，箭头函数内的this值继承自外围作用域。普通function函数总会自动接收一个this值，在该函数的内层函数中，这个this指向window或undefined，所以需要用self来将外部的this导入内部函数，另一种方式是在内部函数上执行.bind(this)，两种方法都不甚美观。
```js
{
  ...
  addAll: function addAll(pieces) {
    var self = this;
    _.each(pieces, function (piece) {
      self.add(piece);
    });
  },
  ...
}
```
使用箭头函数就不存在这个问题
```js
// ES6的方法语法
{
  ...
  addAll(pieces) {
    _.each(pieces, piece => this.add(piece));
  },
  ...
}
```

#### http请求头信息和响应头信息
1. HTTP 响应首部字段
1) Access-Control-Allow-Origin: <origin> | *
2) Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header
3) Access-Control-Max-Age: <delta-seconds>
4) Access-Control-Allow-Credentials: true
5) Access-Control-Allow-Methods: <method>[, <method>]*
6) Access-Control-Allow-Headers: <field-name>[, <field-name>]*

2. HTTP 请求首部字段
1) Origin: <origin>
2) Access-Control-Request-Method: <method>
3) Access-Control-Request-Headers: <field-name>[, <field-name>]*

#### 跨域请求，CORS
1. 跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站有权限访问哪些资源。
2. 对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。
3. 客户端和服务器之间使用 CORS 首部字段来处理跨域权限。使用请求报文中 Origin 和 响应报文中的 Access-Control-Allow-Origin 就能完成最简单的访问控制。Access-Control-Allow-Origin 应当为 * 或者包含由 Origin 首部字段所指明的域名。
4. 与前述简单请求不同，“需预检的请求”要求必须首先使用 OPTIONS   方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。"预检请求“的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。
5. Fetch 与 CORS 的一个有趣的特性是，可以基于  HTTP cookies 和 HTTP 认证信息发送身份凭证。一般而言，对于跨域 XMLHttpRequest 或 Fetch 请求，浏览器不会发送身份凭证信息。如果要发送凭证信息，需要设置 XMLHttpRequest 的某个特殊标志位。将 XMLHttpRequest 的 withCredentials 标志设置为 true，从而向服务器发送 Cookies。因为这是一个简单 GET 请求，所以浏览器不会对其发起“预检请求”。但是，如果服务器端的响应中未携带 Access-Control-Allow-Credentials: true ，浏览器将不会把响应内容返回给请求的发送者。对于附带身份凭证的请求，服务器不得设置 Access-Control-Allow-Origin 的值为“*”。


#### http三次握手四次挥手(典型的 HTTP 会话)
1. 在像 HTTP 这样的客户端-服务器协议中, 会话分为三个阶段:
1) 客户端建立一条 TCP 连接 (如果传输层不是 TCP, 也可以是其他适合的连接)。
2) 客户端发送请求并等待应答。
3) 服务器处理请求并送回应答, 包括一个状态码和对应的数据。

从 HTTP/1.1 开始, 连接在完成第三阶段后不再关闭, 客户端可以再次发起新的请求: 这意味着第二步和第三步可以进行数次。
```js
//  请求示例
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue

// 响应示例
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (这里是 29769 字节的网页信息)
```

#### 异步模式底层实现逻辑
1. 相比多线程，单线程不需要考虑创建线程、销毁线程、线程间通信等等诸如此类的复杂问题。
2. 单线程的Javascript中其实没办法实现真正意义上的异步，Javascript中所谓的异步可以理解成延迟执行。


#### 如何使用webpack的proxyTable解决跨域问题
```js
dev: {
    env: require('./dev.env'),
    port: 8001,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/api': {
            target: 'http://192.168.7.77:8024/',//设置你调用的接口域名和端口号 别忘了加http
            changeOrigin: true,
            pathRewrite: {
              '^/api': '/'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
            }
          }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
```

#### ie9+报错vuex requires a Promise polyfill in this browser.
```js
解决如下：
　　npm install --save-dev babel-polyfill
    或者 cnpm install  babel-polyfill -D
　　修改 webpack.base.conf.js

　　将:　entry: {
　　　　　 app: './src/main.js'
　　　　 }
　　改为:　entry: {
　　　　　　 'babel-polyfill': 'babel-polyfill',
　　　　　　 app: './src/main.js'
　　　　    }
```

#### vue-cli设置全局对象方法之一
```js
//在webpack.base.conf.js中设置
var webpack = require('webpack')
plugins: [
   new webpack.optimize.CommonsChunkPlugin('common.js'),
   new webpack.ProvidePlugin({
       $: "jquery",
       axios: 'axios',
   })
]
```


#### 如何理解 Vue 实例的数据对象
1. 实例创建之后，可以通过 vm.$data 访问原始数据对象。Vue 实例也代理了 data 对象上所有的属性，因此访问 vm.a 等价于访问 vm.$data.a
2. 以 _ 或 $ 开头的属性 不会 被 Vue 实例代理，因为它们可能和 Vue 内置的属性、API 方法冲突。你可以使用例如 vm.$data._property 的方式访问这些属性。
3. 当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。
4. 注意，不应该对 data 属性使用箭头函数 (例如data: () => { return { a: this.myProp }})。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.myProp 将是 undefined。


#### 如何理解 vue 实例的computed对象
1. 计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
2. 注意，不应该使用箭头函数来定义计算属性函数 (例如 aDouble: () => this.a * 2)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。
3. 计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。注意，如果实例范畴之外的依赖 (比如非响应式的 not reactive) 是不会触发计算属性更新的。


#### 如何理解 vue 实例的methods对象
1. 注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。


#### 如何理解 vue 实例的watch对象
1. 一个对象，键是需要观察的表达式(data对象中的属性)，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
2. 注意，不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。


#### 如何理解 vue 实例的mounted对象
1. el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
2. 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
```js
mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
  })
}
```

#### 可以用箭头函数来定义vue的一个生命周期方法吗
1. 所有的生命周期钩子自动绑定 this 上下文到实例中，因此你可以访问数据，对属性和方法进行运算。这意味着 你不能使用箭头函数来定义一个生命周期方法 (例如 created: () => this.fetchTodos())。这是因为箭头函数绑定了父上下文，因此 this 与你期待的 Vue 实例不同，this.fetchTodos 的行为未定义。


#### 如何理解vue中的extends和mixin
1. 的extends 和 mixins 类似，区别在于，组件自身的选项会比要扩展的源组件具有更高的优先级。


#### vue组件之间如何传值
1. 子组件传值给父组件，通过$emit触发自定义事件
2. 父组件传值给子组件，通过props属性
3. 非父子组件之间值的传递，需要一个new vue作为中间组件，负载$emit分发事件和$on相应事件


#### import和require的区别
1. require是运行时调用，所以require理论上可以运用在代码的任何地方；import是编译时调用，所以必须放在文件开头。
2. require 是 AMD规范引入方式；import是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法
3. require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量。import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require


#### 如何在vue组件中使用css预处理器scss
```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install sass-loader node-sass --save-dev
```
```css
<style lang="scss">
/* write SASS! */
</style>
```

#### vue中应该注意的事项
1. Component names should always be multi-word, except for root App components.
This prevents conflicts with existing and future HTML elements, since all HTML elements are a single word.
2. When using the data property on a component (i.e. anywhere except on new Vue), the value must be a function that returns an object.
3. key with v-for is always required on components, in order to maintain internal component state down the subtree. Even for elements though, it’s a good practice to maintain predictable behavior, such as object constancy in animations.
```js
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
4. For applications, styles in a top-level App component and in layout components may be global, but all other components should always be scoped. Component libraries, however, should prefer a class-based strategy instead of using the scoped attribute.
5. Always use the $_ prefix for custom private properties in a plugin, mixin, etc. Then to avoid conflicts with code by other authors, also include a named scope (e.g. $_yourPluginName_).


#### 状态管理器：vuex
1. 如果不是大型应用，通常一个global event bus就够了，用于非父子组件之间的通信。在url中通过query或params也可以传值
2. 每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新；你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用
```js
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, n) {
        state.count += n
    }
  }
})

//现在，你可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更：

store.commit('increment', 10)
console.log(store.state.count) // -> 1

//提交 mutation 的另一种方式是直接使用包含 type 属性的对象：

store.commit({
  type: 'increment',
  amount: 10
})
```
3. 组件依赖全局状态单例。在模块化的构建系统中，在每个需要使用 state 的组件中需要频繁地导入，并且在测试组件时需要模拟状态。Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）,子组件能通过 this.$store 访问到。：
```js
// 创建一个 Counter 组件
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}

const app = new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```
4. Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算:
```js
//Getter 接受 state 作为其第一个参数：
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})

//Getter 会暴露为 store.getters 对象：
store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]

//Getter 也可以接受其他 getter 作为第二个参数：
getters: {
  // ...
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
store.getters.doneTodosCount // -> 1

//我们可以很容易地在任何组件中使用它：
computed: {
  doneTodosCount () {
    return this.$store.getters.doneTodosCount
  }
}

//你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
getters: {
  // ...
  getTodoById: (state, getters) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
```
5. Mutation 必须是同步函数。因为当 mutation 触发的时候，回调函数还没有被调用，devtools 不知道什么时候回调函数实际上被调用——实质上任何在回调函数中进行的的状态的改变都是不可追踪的。
6. 你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```
7. Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包含任意异步操作
```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```

#### 如何引入npm安装的模块里面的css等文件？
```js
$ npm install iview

//main.js入口文件：
import 'iview/dist/styles/iview.css'    // 使用 CSS
```

#### 如何在main.js引入less文件
```js
$ cnpm install less less-loader --save-dev

//  在style 中 引入less使用路径别名时应该 ~作为前缀
```

#### 路由过滤登录
```js
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})
```

#### 一次性并发多个请求
```js
function getUserAccount(){
  return axios.get('/user/12345');
}
function getUserPermissions(){
  return axios.get('/user/12345/permissions');
}
axios.all([getUserAccount(),getUserPermissions()])
  .then(axios.spread(function(acct,perms){
    //当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
  }))
  
//iterable是一个可以迭代的参数如数组等
axios.all(iterable)
//callback要等到所有请求都完成才会执行
axios.spread(callback)

```

#### axios 请求的配置
```js
{
  //`url`是请求的服务器地址
  url:'/user',
  //`method`是请求资源的方式
  method:'get'//default
  //如果`url`不是绝对地址，那么`baseURL`将会加到`url`的前面
  //当`url`是相对地址的时候，设置`baseURL`会非常的方便
  baseURL:'https://some-domain.com/api/',
  //`transformRequest`选项允许我们在请求发送到服务器之前对请求的数据做出一些改动
  //该选项只适用于以下请求方式：`put/post/patch`
  //数组里面的最后一个函数必须返回一个字符串、-一个`ArrayBuffer`或者`Stream`
  transformRequest:[function(data){
    //在这里根据自己的需求改变数据
    return data;
  }],
  //`transformResponse`选项允许我们在数据传送到`then/catch`方法之前对数据进行改动
  transformResponse:[function(data){
    //在这里根据自己的需求改变数据
    return data;
  }],
  //`headers`选项是需要被发送的自定义请求头信息
  headers: {'X-Requested-With':'XMLHttpRequest'},
  //`params`选项是要随请求一起发送的请求参数----一般链接在URL后面
  //他的类型必须是一个纯对象或者是URLSearchParams对象
  params: {
    ID:12345
  },
  //`paramsSerializer`是一个可选的函数，起作用是让参数（params）序列化
  //例如(https://www.npmjs.com/package/qs,http://api.jquery.com/jquery.param)
  paramsSerializer: function(params){
    return Qs.stringify(params,{arrayFormat:'brackets'})
  },
  //`data`选项是作为一个请求体而需要被发送的数据
  //该选项只适用于方法：`put/post/patch`
  //当没有设置`transformRequest`选项时dada必须是以下几种类型之一
  //string/plain/object/ArrayBuffer/ArrayBufferView/URLSearchParams
  //仅仅浏览器：FormData/File/Bold
  //仅node:Stream
  data {
    firstName:"Fred"
  },
  //`timeout`选项定义了请求发出的延迟毫秒数
  //如果请求花费的时间超过延迟的时间，那么请求会被终止

  timeout:1000,
  //`withCredentails`选项表明了是否是跨域请求
  
  withCredentials:false,//default
  //`adapter`适配器选项允许自定义处理请求，这会使得测试变得方便
  //返回一个promise,并提供验证返回
  adapter: function(config){
    /*..........*/
  },
  //`auth`表明HTTP基础的认证应该被使用，并提供证书
  //这会设置一个authorization头（header）,并覆盖你在header设置的Authorization头信息
  auth: {
    username:"zhangsan",
    password: "s00sdkf"
  },
  //返回数据的格式
  //其可选项是arraybuffer,blob,document,json,text,stream
  responseType:'json',//default
  //
  xsrfCookieName: 'XSRF-TOKEN',//default
  xsrfHeaderName:'X-XSRF-TOKEN',//default
  //`onUploadProgress`上传进度事件
  onUploadProgress:function(progressEvent){
    //下载进度的事件
onDownloadProgress:function(progressEvent){
}
  },
  //相应内容的最大值
  maxContentLength:2000,
  //`validateStatus`定义了是否根据http相应状态码，来resolve或者reject promise
  //如果`validateStatus`返回true(或者设置为`null`或者`undefined`),那么promise的状态将会是resolved,否则其状态就是rejected
  validateStatus:function(status){
    return status >= 200 && status <300;//default
  },
  //`maxRedirects`定义了在nodejs中重定向的最大数量
  maxRedirects: 5,//default
  //`httpAgent/httpsAgent`定义了当发送http/https请求要用到的自定义代理
  //keeyAlive在选项中没有被默认激活
  httpAgent: new http.Agent({keeyAlive:true}),
  httpsAgent: new https.Agent({keeyAlive:true}),
  //proxy定义了主机名字和端口号，
  //`auth`表明http基本认证应该与proxy代理链接，并提供证书
  //这将会设置一个`Proxy-Authorization` header,并且会覆盖掉已经存在的`Proxy-Authorization`  header
  proxy: {
    host:'127.0.0.1',
    port: 9000,
    auth: {
      username:'skda',
      password:'radsd'
    }
  },
  //`cancelToken`定义了一个用于取消请求的cancel token
  //详见cancelation部分
  cancelToken: new cancelToken(function(cancel){

  })
}
```

#### 请求返回的内容
```js
{
  data:{},
  status:200,
  //从服务器返回的http状态文本
  statusText:'OK',
  //响应头信息
  headers: {},
  //`config`是在请求的时候的一些配置信息
  config: {}
}
```

#### axios 设置全局默认配置，对所有请求都有效
```js
axios.defaults.baseURL = 'http://api.exmple.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';

//配置中的优先级
//创建一个实例的时候会使用libray目录中的默认配置
//在这里timeout配置的值为0，来自于libray的默认值
var instance = axios.create();
//回覆盖掉library的默认值
//现在所有的请求都要等2.5S之后才会发出
instance.defaults.timeout = 2500;
//这里的timeout回覆盖之前的2.5S变成5s
instance.get('/longRequest',{
  timeout: 5000
});
```

#### axios拦截器，可以在请求、相应到达服务器或then之前拦截它们
```js
//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  return res;
},function(err){
  //Do something with response error
  return Promise.reject(error);
})
```


#### css 清除浮动
```css
/* 清除浮动 */
.clearfix:after{ 
	content: '';
	display: block;
	clear: both;
	height: 0;
	visibility: hidden;
}
.clearfix{ /*兼容 IE*/
	zoom: 1;
}
```

#### 前端在通过API接口获取后台数据，根据后台提供的字段取值的时候，因为担心某些字段后台接口没有定义，为避免出现'undefined'的情况，可能会使用“或”连接符连接一个空字符串(|| '')，慎用该方法，因为字段如果是“0/undefined/null/""/false”，最终都会取得该空字符串。可是在数据库中，id为0对应的数据也许是存在的，不应该取空字符串。


#### 预加载
充分利用用户操作间隙时间进行图片或文件的预加载，这样等到用户访问到这些资源的时候，浏览器会自动使用缓存，可以提升用户体验
```js
var images = new Array()  
function preload() {  
    for (i = 0; i < preload.arguments.length; i++) {  
        images[i] = new Image()  
        images[i].src = preload.arguments[i]  
    }  
}  
preload(  
    "http://domain.tld/gallery/image-001.jpg",  
    "http://domain.tld/gallery/image-002.jpg",  
    "http://domain.tld/gallery/image-003.jpg"  
)  
```

#### 懒加载
图片地址放在除src的其他属性上，如data-url，src属性可以使用一张1px大小的图片作为占位符；待页面加载完成后，根据屏幕可视窗口大小加上滚动条滚动距离之和是否大于图片Y轴的坐标来决定是否加载真实的图片。
```js
// 屏幕可视窗口大小
window.innerHeight / document.documentElement.clientHeight
// 滚动条滚动距离
window.pageYOffset / doument.documentElement.ScrollTop
```

#### 前端与UI
1. 经历过各种版本，各种工具，只说现在最好用的：常规设计稿（指不含动画等复杂交互，静态图为主的）用sketch完成，在zeplin里建好project，sketch里装上zeplin插件，选画板导入zeplin。前端开发们就能在zeplin里看到包含尺寸标注、色值、简单前端代码的设计稿了。
2. 最小宽度：GitHub是980px，百度是1000px，Google是1080px
3. 内容性质字体大小不得小于 12px ，因为某些浏览器默认文字大小只能是 12px。网页中显示小于 12px 的文字会变形。
4. 文字超出容器大小时候的溢出处理方式
5. 页面布局：弹性布局、流动布局、固定布局
```css
<link rel="stylesheet" type="text/css"
　　　　media="screen and (max-device-width: 400px)"
　　　　href="tinyScreen.css" />

@import url("tinyScreen.css") screen and (max-device-width: 400px);

@media screen and (max-device-width: 400px) {
　　　　.column {
　　　　　　float: none;
　　　　　　width:auto;
　　　　}
　　}
```
6.此外，windows平台缩放图片时，可能出现图像失真现象。这时，可以尝试使用: img { -ms-interpolation-mode: bicubic; }

#### 个人网站
```js
// 把新建用户的密码限制去除
step one: login to mysql server sa root user
step two: uninstall plugin validate_password;

// 新建用户并授权
create user 'carol'@'%' identified by 'password';
grant all on *.* to 'carol'@'%'; 

//启动MySQL服务
https://github.com/jaywcjlove/mysql-tutorial/blob/master/chapter2/2.3.md
```

#### mac系统
1. 安装brew： ruby -e "$(curl --insecure -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2. 安装nginx: brew install nginx
3. 配置nginx: vim /usr/local/etc/nginx/nginx.conf
```js
user  linqing staff;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       8080;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /Users/linqing/Desktop/datav/charts/dist;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
    include servers/*;
}

```
4. 修改hosts文件： sudo nano /etc/hosts
5. 刷新DNS缓存： sudo killall -HUP mDNSResponder
6. 查看本机IP：ifconfig | grep "inet " | grep -v 127.0.0.1
7. 可以使用nginx挂载静态文件，局域网内的其他用户可以通过你电脑的IP和指定的端口访问到web服务；这是搭建测试环境的一种方式。如果希望用户看到最新的文件，需要重新打包。
8. 启动nginx: sudo nginx
9. sudo nginx -s reload/quit/stop/reopen

#### 选择器
```js

//文字竖着排列
-ms-writing-mode: tb-rl;
-webkit-writing-mode: vertical-rl;
-moz-writing-mode: vertical-rl;
-ms-writing-mode: vertical-rl;
writing-mode: vertical-rl;
 -webkit-text-orientation: upright;
-moz-text-orientation: upright;
-ms-text-orientation: upright;
text-orientation: upright;
letter-spacing: 5px;

// i++和++i
var i = 42;
alert(i++); // shows 42
alert(i); // shows 43
i = 42;
alert(++i); // shows 43
alert(i); // shows 43

//DOM
document.body.childNodes: The childNodes property returns a collection of a node's child nodes, as a NodeList object.The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers. The index starts at 0.Whitespace inside elements is considered as text, and text is considered as nodes. Comments are also considered as nodes.
document.documentElement: The difference between this property and the document.body property, is that the document.body element returns the <body> element, while the document.documentElement returns the <html> element.
document.body.children: To return a collection of a node's element nodes (excluding text and comment nodes), use the children property
document.createDocumentFragment: 

setAttribute(): 
getAttribute():
removeAttribute():
hasAttribute():
```

#### vue中怎么引入scss文件
```js
//https://segmentfault.com/q/1010000008731809

npm install sass-resources-loader --save-dev

修改build/util.js
scss: generateLoaders('sass').concat(
  {
    loader: 'sass-resources-loader',
    options: {
      resources: path.resolve(__dirname, '../src/assets/your.scss')
    }
  }
)
```

#### vue-i18n
```js
//获取i18n实例：this.$i18n
console.log(this.$i18n.getLocaleMessage(this.mylang))
console.log(this.$i18n.t('msg.common.model'))
```

#### Facebook 开源的Flow的使用
1. Flow是JavaScript的静态类型检查工具，可以对基本类型、函数类型、数组类型、元组类型、类、联结类型、交叉类型、对象的可选属性和变量的可选类型、any类型进行标注
2. https://zhuanlan.zhihu.com/p/26204569


#### v-model一个computed属性
If you're going to v-model a computed, it needs a setter. Whatever you want it to do with the updated value (probably write it to the $store, considering that's what your getter pulls it from) you do in the setter.

If writing it back to the store happens via form submission, you don't want to v-model, you just want to set :value.

If you want to have an intermediate state, where it's saved somewhere but doesn't overwrite the source in the $store until form submission, you'll need to create such a data item.


#### 一些前端工程化工具
1. JSCoverage通过度量Web页面使用的JavaScript代码，收集被Web浏览器执行的JavaScript代码信息来达到测试覆盖率统计的功能。
2. semver: Semantic Versioning 是由 GitHub 的联合创始人 Tom Preston-Werner 建立的一个有关如何命名软件和库（包）版本的规范，用以解决在大型项目中对依赖的版本失去控制的问题（例如你可能因为害怕不兼容而不敢去更新依赖）
3. firebase: https://console.firebase.google.com/
4. vinyl-fs: Vinyl is a very simple metadata object that describes a file. When you think of a file, two attributes come to mind: path and contents. These are the main attributes on a Vinyl object. A file does not necessarily represent something on your computer’s file system. You have files on S3, FTP, Dropbox, Box, CloudThingly.io and other services. Vinyl can be used to describe files from all of these sources. While Vinyl provides a clean way to describe a file, we now need a way to access these files. Each file source needs what we call a "Vinyl adapter". A Vinyl adapter simply exposes a src(globs) and a dest(folder) method. Each return a stream. The src stream produces Vinyl objects, and the dest stream consumes Vinyl objects. Vinyl adapters can expose extra methods that might be specific to their input/output medium, such as the symlink method vinyl-fs provides.


#### css高度坍塌问题
1. https://www.jianshu.com/p/a17c0f9735d9
2. 父元素中存在子元素的float不为none，并且父元素的height未设置即auto或者有浮动的子元素发生了溢出的时候，就会出现父元素的高度塌陷
3. 解决方法：
```css
1. 如果你的父元素并不是需要height为auto或者你的浮动子元素高度一定的话，可以给父元素设置一定的高度来把浮动元素装进去，防止发生溢出.

2. 在浮动元素的下个元素设置clear，通过clear方法解决clear:left; 清除左浮动，clear:right;清除右浮动，clear:both; 左右都清除。这样做还是会有高度塌陷问题，但是不会影响正常的排版。

3. 在父元素内，浮动元素下设置一个高度为0的div，并设置clear: both。这样页面会增加一个元素

4. 在浮动元素所在的父元素添加伪元素：
 parent:after {
     content: '';
     display: block;
     clear: both;
 }
 
5. 触发BFC机制（Block formatting contexts 块格式上下文），解决问题：元素中出现float不为none、position:absolute;、overflow不为visible的时候都会触发BFC机制。触发BFC后会为它的内容建立新的块格式化的上下文，就是格式化一下上下文即重新计算这个元素。这个计算就包括了内部所有元素包含了浮动的元素，因此才会解决塌陷问题。
```

#### JS判断是移动端浏览器还是PC端
```html
<html>  
<head>  
<title> 判断浏览器 </title>  
<script type="text/javascript">  
     
var browser={  
    versions:function(){   
           var u = navigator.userAgent, app = navigator.appVersion;   
           return {  // 移动终端浏览器版本信息   
                trident: u.indexOf('Trident') > -1,  // IE内核  
                presto: u.indexOf('Presto') > -1,    // Opera内核  
                webKit: u.indexOf('AppleWebKit') > -1,  // 苹果、谷歌内核  
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,  // 火狐内核  
                mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/)&&u.indexOf('QIHU')&&u.indexOf('Chrome')<0,  // 是否为移动终端    
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),  // iOS终端  
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,  // Android 终端或者 UC 浏览器  
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,  // 是否为 iPhone 或者 QQHD 浏览器  
                iPad: u.indexOf('iPad') > -1,   // 是否 iPad  
                webApp: u.indexOf('Safari') == -1,   // 是否WEB应该程序，没有头部与底部。  
                ua:u   
            };  
         }(),  
           
         language:(navigator.browserLanguage || navigator.language).toLowerCase()  
}   
  
if(browser.versions.mobile&&!browser.versions.iPad){  
     this.location = "http://m.baidu.com/";   // 百度手机网站  
}  
</script>  
</head>  
<body>  
<p> 该演示页面电脑端打开无任何效果，手机打开会跳转到手机百度 </p>  
</body>  
</html>  
```

#### 移动设备的分辨率与rpx (以iPhone6为例)
1. 屏幕尺寸：对角线的距离 4.7寸
2. 逻辑分辨率：只和屏幕尺寸有关 375*667pt
3. 物理分辨率：和屏幕大小无关，不是一个长度单位 750*1334px
4. Iphone6（现在大部分设计图都是在Iphone6下进行换算的）下2个px构成一个pt


#### 如何做不同分辨率设备的自使用？

1. 以iphone6的物理像素750x1334为视觉稿进行设计，而在小程序中使用rpx为单位 
2. iphone6下 1px=1rpx=0.5pt 
3. 使用rpx，小程序会自动在不同的分辨率下进行转换，而使用px单位则不会
4. iphone6下 1px = 1rpx (好计算) iphone6 plus下 1px = 0.6rpx


#### 其他
1. http请求报400，请求无效 (Bad request)，出现这个请求无效报错说明请求没有进入到后台服务里。原因：前端提交数据的字段名称或者是字段类型和后台的实体类不一致，导致无法封装；前端提交的到后台的数据应该是json字符串类型，而前端没有将对象转化为字符串类型，data: JSON.stringify(param)
2. 

#### shadowsocks搭建VPN
```js
wget --no-check-certificate -O shadowsocks.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh

chmod +x shadowsocks.sh

./shadowsocks.sh 2>&1 | tee shadowsocks.log

```

```js
/etc/shadowsocks.json 文件的内容

{
    "server":"0.0.0.0",
    "local_address":"127.0.0.1",
    "local_port":1080,
    "port_password":{
         "8989":"password0",
         "9001":"password1",
         "9002":"password2",
         "9003":"password3",
         "9004":"password4"
    },
    "timeout":300,
    "method":"your_encryption_method",
    "fast_open": false
}
```

```js
启动shadowsocks
/etc/init.d/shadowsocks start
重启
/etc/init.d/shadowsocks restart

将shadowsocks服务器设置的端口号加入防火墙规则
iptables -I INPUT -p tcp --dport your_server_port -j ACCEPT
iptables -I OUTPUT -p tcp --dport your_server_port -j ACCEPT

```

```js
安装加速器
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh

chmod +x bbr.sh

./bbr.sh
```

### vue slot
1. 插槽，也就是slot，是组件的一块HTML模板，这块模板显示不显示、以及怎样显示由父组件来决定.
2. 从模板种类的角度来分，其实都可以分为非插槽模板和插槽模板两大类.
3. 非插槽模板的显示与隐藏以及怎样显示由组件自身控制；插槽模板是slot，它是一个空壳子，因为它的显示与隐藏以及最后用什么样的html模板显示由父组件控制。但是插槽显示的位置却由子组件自身决定，slot写在组件template的什么位置，父组件传过来的模板将来就显示在什么位置.
4. 单个插槽是vue的官方叫法，但是其实也可以叫它默认插槽，或者与具名插槽相对，我们可以叫它匿名插槽，因为它不用设置name属性.
5. 单个插槽可以放置在组件的任意位置，但是就像它的名字一样，一个组件中只能有一个该类插槽。相对应的，具名插槽就可以有很多个，只要名字（name属性）不同就可以了。
6. 具名插槽可以在一个组件中出现N次，出现在不同的位置。
7. 最后，就是我们的作用域插槽。这个稍微难理解一点。官方叫它作用域插槽，实际上，对比前面两种插槽，我们可以叫它带数据的插槽。什么意思呢，就是前面两种，都是在组件的template里面写, 但是作用域插槽要求，在slot上面绑定数据。


### vue mixins 混入，vue extend
1. 混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。
2. 当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。比如，数据对象在内部会进行递归合并，在和组件的数据发生冲突时以组件数据优先。
3. 同名钩子函数将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用.
4. 值为对象的选项，例如 methods, components 和directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。
5. Vue.extend() 也使用同样的策略进行合并
6. 自定义选项将使用默认策略，即简单地覆盖已有值。如果想让自定义选项以自定义逻辑合并，可以向 Vue.config.optionMergeStrategies 添加一个函数
7. mixins接收对象数组（可理解为多继承），extends接收的是对象或函数（可理解为单继承）
```js
const extend = {
  created () {
    console.log('extends created')
  }
}
const mixin1 = {
  created () {
    console.log('mixin1 created')
  }
}
const mixin2 = {
  created () {
    console.log('mixin2 created')
  }
}
export default {
  extends: extend,
  mixins: [mixin1, mixin2],
  name: 'app',
  created () {
    console.log('created')
  }
}

//控制台输出
extends created
mixin1 created
mixin2 created
created
```

### vue prototype原型, vue extend扩展
1. Vue.extend和Vue.component是为了创建构造器和组件; mixins和extends是为了拓展组件; install是开发插件; 总的顺序关系: Vue.extend>Vue.component>extends>mixins


### 输入防抖动
```js
if(this.timer) {
  clearTimeout(this.timer)
  this.timer = null
}
this.timer = setTimeout(() => {
  this.$emit('change', obj)
}, 500)
```

### 判断挂载点是否是<body>元素或者是<html>元素，在生产环境下会报出警
1.挂载点只是一个被将要被替换的占位符。如果此时挂载点为body元素或者html元素的情况，body和html元素同样会被替换掉,此时html页面则不是一个标准规定的html标准体了。浏览器同样不会对此进行解析。

### Vue.config 是一个对象，包含 Vue 的全局配置。可以在启动应用之前修改下列属性：
```js
//取消 Vue 所有的日志与警告
Vue.config.silent = true 

//合并策略选项分别接收在父实例和子实例上定义的该选项的值作为第一个和第二个参数，Vue 实例上下文被作为第三个参数传入
Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
  return child + 1
}

const Profile = Vue.extend({
  _my_option: 1
}) // Profile.options._my_option = 2

// 务必在加载 Vue 之后，立即同步设置以下内容
Vue.config.devtools = true

Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}

Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` 是组件的继承关系追踪
}

Vue.config.ignoredElements = [
  'my-custom-web-component',
  'another-web-component',
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^ion-/
]

//给 v-on 自定义键位别名
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 179,
  up: [38, 87]
}

Vue.config.performance = false
Vue.config.productionTip = false
```

### Vue 全局API
1. Vue.extend( options )
```js
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')
```

2. Vue.nextTick( [callback, context] )
```js
// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})

// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick()
  .then(function () {
    // DOM 更新了
  })
```

3. Vue.set( target, key, value )

4. Vue.delete( target, key )

5. Vue.directive( id, [definition] )
```js
// 注册
Vue.directive('my-directive', {
  bind: function () {},
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})

// 注册 (指令函数)
Vue.directive('my-directive', function () {
  // 这里将会被 `bind` 和 `update` 调用
})

// getter，返回已注册的指令
var myDirective = Vue.directive('my-directive')
```

6. Vue.filter( id, [definition] )
```js
// 注册
Vue.filter('my-filter', function (value) {
  // 返回处理后的值
})

// getter，返回已注册的过滤器
var myFilter = Vue.filter('my-filter')
```

7. Vue.component( id, [definition] )
```js
// 注册组件，传入一个扩展过的构造器
Vue.component('my-component', Vue.extend({ /* ... */ }))

// 注册组件，传入一个选项对象 (自动调用 Vue.extend)
Vue.component('my-component', { /* ... */ })

// 获取注册的组件 (始终返回构造器)
var MyComponent = Vue.component('my-component')
```

8. Vue.use( plugin )
9. Vue.mixin( mixin )
10. Vue.compile( template )
11. Vue.observable( object )
12. Vue.version


### Vue选项/数据
1. Vue实例会代理data 对象上所有的属性，以 _ 或 $ 开头的属性 不会 被 Vue 实例代理，因为它们可能和 Vue 内置的属性、API 方法冲突。你可以使用例如 vm.$data._property 的方式访问这些属性。当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。
2. props
3. propsData
4. computed
5. methods
6. watch


### Vue选项/DOM
1. el: 提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。在实例挂载之后，元素可以用 vm.$el 访问。如果在实例化时存在这个选项，实例将立即进入编译过程，否则，需要显式调用 vm.$mount() 手动开启编译。提供的元素只能作为挂载点。不同于 Vue 1.x，所有的挂载元素会被 Vue 生成的 DOM 替换。因此不推荐挂载 root 实例到 <html> 或者 <body> 上。如果 render 函数和 template 属性都不存在，挂载 DOM 元素的 HTML 会被提取出来用作模板，此时，必须使用 Runtime + Compiler 构建的 Vue 库。

2. template: 一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。如果 Vue 选项中包含渲染函数，该模板将被忽略。

3. render: 字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode。如果组件是一个函数组件，渲染函数还会接收一个额外的 context 参数，为没有实例的函数组件提供上下文信息。

4. renderError


### Vue选项/生命周期钩子
1. beforeCreate
2. created
3. beforeMount
4. mounted
5. beforeUpdate
6. updated
7. beforeDestroy
8. destroyed


### Vue 其他
1.  vm.$refs: 一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例。
2.  key 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。
3.  v-model的修饰符：.lazy(取代 input 监听 change 事件), .number(输入字符串转为有效的数字), .trim(输入首尾空格过滤)


### npm
```js
rm -rf node_modules/    # 删除已安装的模块
npm cache clean         # 清除 npm 内部缓存
sudo npm update -g npm
npm install             # 重新安装

npm ls d3
npm ls --depth=0
npm list -g --depth=0
```


### git
```html
<html>
<title>git operation</title>
<meta charset="utc-8">
<style>
	.container{width:60%; margin-left: 20%;}
	.section {border: 1px dashed #bbb; padding-left: 15px;}
</style>
<body>
	<div class="container">
		<div class="section s-1">
			<img src="gitdev.jpg" alt="">
			<p>master: 对项目进行tag或发布版本等操作</p>
			<p>develop: 从master分支上检出，团队成员一般不直接更改该分支，而是分别从该分支检出自己的feature分支，开发完成后将自己的分支merge到develop分支</p>
			<p>release: 从develop分支上检出，该分支用作发版前的测试，可进行简单的bug修复。如果bug比较多，但已修改了一些，可以merge回develop分支由其他分支进行bug修复。此分支测试完成后，需要同时merge到master和develop分支上</p>
			<p>feature: 从develop分支上检出，团队成员中每个人维护一个自己的feature分支，开发完成后merge回develop分支</p>
			<p>fix: 由develop分支检出，用于bug修复，bug修复完成需merge回develop分支，并将其删除，属于临时性分支</p>
			<p>hotfix: 该分支由master分支检出，进行线上版本的bug修复，修复完成后merge回master分支，并merge到develop分支，并将其删除，也属于临时性分支</p>
		</div>
		<div class="section s-2">
			<p>以图形化的方式显示提交历史的关系: git log --graph</p>
			<p>看所有commit记录: git log --pretty=oneline</p>
			<p>看文件A的commit记录: git log A</p>
			<p>看文件A每次提交的diff: git log -p A</p>
			<p>看某次commit的所有改动: git show commit_id</p>
			<p>看文件A在某次commit中的改动: git show commit_id A</p>
			<p>回退到某次commit_id对应的代码，或者说撤销之前的commit: git reset --hard commit_id (不保留修改), git reset --soft commit_id (保留修改)</p>
			<p>回退到某次commit_id，修改代码后提交，但远程代码的commit_id比本地的新，强制推送: git push --force</p>
		</div>
		<div class="section s-3">
			<p>看当前工作目录的状态: git status</p>
			<p>若修改了文件A想还原修改: git checkout -- A</p>
			<p>看文件修改后的差异: git diff</p>
		</div>
		<div class="section s-4">
			<p>列出所有标签: git tag</p>
			<p>查看标签版本信息: git show [tagname]</p>
			<p>切换标签: git checkout [tagname]，如果要在该tag对应的代码上进行修改，需要新建一个分支，这样会从该tag创建一个分支，然后就和普通的Git操作一样了</p>
			<p>删除标签: git tag -d [tagname]</p>
			<p>给指定的commit_id补打标签: git tag [tagname] commit_id</p>
			<p>git tag -a [tagname] -m "blablabla..."可以指定标签信息</p>
			<p>标签提交到服务器: git push origin [tagname]</p>
			<p>将本地所有标签一次性提交: git push origin --tags</p>
		</div>
		<div class="section s-5">
			<p>查看当前分支所有提交者及其提交次数: git log | grep "^Author: " | awk '{print $2}' | sort | uniq -c | sort -k1,1nr</p>
			<p>按人员统计代码量: git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done</p>
			<p>指定用户名、指定时间段内代码量差异: git log --since==2018-8-23 --until==2019-2-3 --author="repos"--pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n",add, subs, loc }'</p>
		</div>
		<div class="section s-6">
			<p>切换分支: git checkout [branch-name]</p>
			<p>新建分支: git branch [new-branch-name]</p>
			<p>新建并切换分支: git checkout -b [new-branch-name]</p>
			<p>合并分支: git merge [branch-name]</p>
			<p>删除分支: git branch -d [branch-name]</p>
			<p>推送分支到服务器: git push origin [branch-name]</p>
			<p>查看远程分支: git branch -a</p>
			<p>删除远程分支: git push origin --delete [branch-name]</p>
		</div>
		<div class="section s-7">
			<p>储存变更，暂时不提交到服务器，切换到其他分支继续工作: git stash</p>
			<p>查看现有的stash: git stash list</p>
			<p>重新应用stash: git stash apply stash@{2}</p>
			<p>移除stash: git stash drop stash@{2}</p>
		</div>
	</div>
</body>
</html>
```

### python serve
```
python -m http.server 
```

### windows powershell delete folders
```
rmdir dolder-name
```

### windows 启动 nginx
```
start nginx

nginx -s stop

nginx -s reload

在ngixn.conf配置文件中可以配置多个端口，分别指向不同的静态文件文件夹，访问不同的网站
```

### webpack 配置多个文件出口
```
var config = {
    //Add common Configuration
    watch: true,
};

var config_1 = Object.assign({}, config, {
    name: "mc_1",
    entry: './multiCat/multiCat.js',
    output: {
      path: path.resolve(__dirname, '../../client/public'),
      filename: 'mc.js',
      library: 'mc',
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    //mode: 'development'
});
var config_2 = Object.assign({}, config,{
    name: "mc_2",
    entry: './multiCat/multiCat.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'mc.js',
      library: 'mc',
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
    mode: 'development'
});

// Return Array of Configurations
module.exports = [
  config_1, config_2      
];
```

```js
google recaptcha 服务国内不需要翻墙网址：https://www.recaptcha.net/recaptcha/api.js
```
