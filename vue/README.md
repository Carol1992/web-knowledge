```html
所有的vue组件都是Vue实例，并且接受相同的选项对象

只有当实例被创建时就已经存在于 data 中的属性才是响应式的

每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止；箭头函数不能通过call,apply, bind 动态绑定

Vue.js 使用了基于 HTML 的模板语法, 在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。也可以不用模板，直接写渲染 (render) 函数，使用可选的 JSX 语法。

计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。

当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。

使用key，Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染

v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。注意，v-show 不支持 <template> 元素，也不支持 v-else。一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

可以用 v-for 来遍历一个对象的属性，但是不能保证顺序

Vue不能检测两种情况下数组的变动：改变数组长度；通过索引改变数组的值。这两种情况可以通过Vue.set()或vm.$set()解决 vm.$set(vm.items, indexOfItem, newValue)

对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式属性。为已有对象赋值多个新属性: Object.assign()

有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法

解析 DOM 模板时的注意事项:有些 HTML 元素，诸如 <ul>、<ol>、<table> 和 <select>，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 <li>、<tr> 和 <option>，只能出现在其它某些特定的元素内部。

遵循 W3C 规范中的自定义组件名 (字母全小写且必须包含一个连字符)

基础组件的自动化全局注册:如果你使用了 webpack (或在内部使用了 webpack 的 Vue CLI 3+)，那么就可以使用 require.context 只全局注册这些非常通用的基础组件。在应用入口文件 (比如 src/main.js) 中全局导入基础组件

如果你想要将一个对象的所有属性都作为 prop 传入，你可以使用不带参数的 v-bind (取代 v-bind:prop-name)

单向数据流：父级 prop 的更新会向下流动到子组件中，但是反过来则不行
这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值
这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性

v-on 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 v-on:myEvent 将会变成 v-on:myevent——导致 myEvent 不可能被监听到。因此，我们推荐你始终使用 kebab-case 的事件名。

一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value 特性用于不同的目的。model 选项可以用来避免这样的冲突

在一个组件的根元素上直接监听一个原生事件: .native修饰符

子组件触发父组件对props值的更新的简化写法: .sync修饰符
```js
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>

||
\/

<text-document v-bind:title.sync="doc.title"></text-document>
```

有时为一个插槽设置具体的后备 (也就是默认的) 内容是很有用的，它只会在没有提供内容的时候被渲染。  

Vue 在更新DOM时是异步执行的，当你设置 vm.someData = 'new value'，该组件不会立即重新渲染。
为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)，$nextTick() 返回一个 Promise 对象。

每一个组件实例都对应一个watcher实例，它会在组件渲染过程中把接触过的数据属性记录为依赖，之后当依赖项的setter触发时，会通知watcher，从而使得它关联的组件重新渲染。

Vue无法检测到对象属性的添加与删除，可以通过Vue.set()或this.$set()来动态添加
对于已创建的实例，Vue不允许动态添加根级别的动态属性

```
