# es2015_practice
### 在浏览器执行es6代码，需先转为es5代码
1. 使用traceur,需要在html文件中引入3个js文件，比较简单，但每个有es6代码的页面都需要多加载3个文件
2. 安装babel-preset-es2015,在当前目录下新建.babelrc文件({"presets": ['es2015']}),使用babel buildfile.js -o sourcefile.js 将写有es6代码的文件转为es5代码的文件输出

### 在Node服务端执行es6代码
1. 先安装babel-node 和 babel-preset-es2015,在项目根目录下新建.babelrc文件({"presets": ['es2015']})，把babel加载为require命令的一个钩子，即在应用的入口脚本头部加入下面的语句：require("babel-node/register")。有了这句话后后面所有通过require命令加载的后缀名为.es6, .js, .jsx, .es 的脚本，都会先通过babel转码后再加载。
babel 默认不会转换Iterator, Generator, Set, Map, Promise, Proxy, Reflect, Symbol 等全局对象，以及一些定义在全局对象上的方法，如object.assign.如果你用到了这些功能，需要安装babel-polyfill模块，然后在所有脚本头部加上一行require('babel-polyfill')或import('babel-polyfill')

### let 命令，所声明的变量只在let命令所在的代码块内有效
1. 在for循环中，适合使用let,以往我们使用var,在全局范围内都有效，当循环结束后，var定义的变量i并没有消失，而是泄露成了全局变量。
2. let不像var那样会发生变量提升现象，所以，变量一定要声明后才能使用，否则会报错。es6规定暂时性死区和不存在变量提升，主要是为了减少运行时错误。
3. es5只有全局作用域和函数作用域，但es6有块级作用域，es6允许块级作用域任意嵌套，但外层作用域无法读取内层作用域的变量，也无法调用内层作用域定义的函数，且内层作用域可以定义外层作用域的同名变量。

### const 命令，声明的变量的值不能改变，而且在声明时就应该赋值
1. 与let一样，const也不可重复声明变量
2. es只有2种声明变量的方法：var命令和function命令，es6 增加了let, const, class, import. 所以es6一共有6种声明变量的方法。
3. let, const, class 命令声明的全局变量不属于全局对象的属性。
4. 跨模块常量，使用export和import

### 变量的解构赋值
1. es6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值（模式匹配），如果解构不成功，变量的值等于undefined。
2. 解构赋值允许指定默认值，ES6严格使用相等运算符判断一个位置是否有值，所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候才会求值。
3. 对象的解构赋值：变量必须与属性同名，才能去到正确的值。内部机制：先找到同名属性，然后再赋值给对应的变量，真正被赋值的是后者，而不是前者。
4. 解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。对于无法转为对象的则报错。

### 字符串的扩展
1. JavaScript允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的码点，但是这种表示法只限于\u0000-\uFFFF之间的字符，超出这个范围的必须用2个双字节的形式表示。ES6做了改进，只需要将码点放入大括号就能正确解读，即大括号表示法与四字节的UTF-16编码是等价的。
2. JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2字节。对于那些需要4个字节储存的字符，JavaScript会认为他们是2个字符。
3. es6提供了codePointAt 方法，能够正确处理4字字节储存的字符，返回一个字符的码点。该方法是测试一个字符由2个字节还是4个字节组成的最简单方法。
4. 从码点返回对应字符：string.fromCodePoint()
5. es6为字符串添加了遍历接口，可以对字符串使用for...of遍历循环。
6. 除了用indexOf方法来确定一个字符串是否包含在另一个字符串中，es6还提供了includes(), startsWith(), endsWith().新增的方法都支持第2个参数，表示开始搜索的位置。但endsWith针对前n个字符，其他两个方法针对从第n个位置到字符串结束的字符。
7. repeat():'x'.repeat(3); //'xxx'
8. 模板字符串是增强版的字符串，用反引号表示，可以在字符串中嵌入变量；如果在模板字符串中需要使用反引号，则在其前面要加上反斜杠转义
9. 标签模板可以紧跟在一个函数后面，该函数被调用来处理这个模板字符串，这个被称作标签模板功能。

### 正则的扩展

### 数值的扩展
1. ES6提供了二进制和八进制数值的写法，分别用前缀0b(0B)和0o(0O)表示，如果要将其转化为十进制数值，要用Number方法。
2. Number.isFinite()和Number.isNaN()与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值转为数值，再进行判断。而新方法只对数值有效，对于非数值一律返回false.
3. Number.parseInt()和Number.parseFloat()与传统的全局方法parseInt()和parseFloat()一样。
4. Number.isInteger()用来判断一个值是否为整数。
5. es6在Number对象上新增了一个极小的常量——Number.EPSILON,目的在于为浮点数计算设置一个误差范围。
6. JavaScript能够准确表示的整数范围在-2的53次方和2的53次方之间，不包含端点，超过这个范围就无法精确表示。Number.isSafeInteger()用来判断一个整数是否落在这个范围内。验证运算结果是否落在安全整数范围内，应该验证每个参与运算的值。
7. Math.trunc()方法用于去除一个数的小数部分，返回整数部分；对于非数值，会先将其转为数值，对于空值或无法截取整数的值，会返回NaN.
8. Math.sign()方法用于判断一个数是正数、负数、0，除了返回+1, -1, 0,-0,其余返回NaN。
9. Math.cbrt()用于计算一个数的立方根；Math.clz32()返回一个数的32位无符号整数形式有多少个前导0.

### 数组的扩展
1. Array.from()用于将类似数组的对象和可遍历的对象转为真正的数组，只要是部署了Iterator接口的数据结构都可以使用。
2. 扩展运算符(...)也可以将某些数据结构转为数组。
3. 任何有length属性的对象，都可以通过Array.from()转为数组，而这种情况扩展运算符无法转换。
4. Array.from()还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入原数组。
5. Array.of()用于将一组值转换为数组；总是返回参数值组成的数组，如果没有参数，则返回一个空数组。
6. find()/findIndex()找出第一个符合条件的数组成员，没有符合则返回undefined/找出第一个符合条件的数组成员的位置，没有符合则返回-1
7. fill()用于空数组的初始化非常方便，可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
8. 数组实例的entries(), keys(), values(), includes();
9. 数组的空位是指数组的某一个位置没有任何值，es6明确将空位转为undefined
10. 数组推导，需要注意的是，新数组会立即在内存中生成，如果原数组很大将非常耗内存。

### 函数的扩展
1. 函数参数的默认值，通常情况下，定义了默认值的参数应该是函数的最后一个参数，如果不是最后一个参数，实际上这个参数是无法忽略的。
2. 函数的length属性，指定默认值后，length属性将返回没有指定默认值的参数的个数。
3. rest参数(形式为“...变量名”)，用于获取函数的多余参数，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入其中。rest参数只能是最后一个参数，否则会报错。
4. 扩展运算符(...)好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。所以不需要apply方法将数组转为函数的参数了。如果将扩展运算符用于数组赋值，则只能放在参数的最后一位，否则会报错。任何类似数组的对象都可以用扩展运算符转为真正的数组。
5. 函数的name属性返回该函数的函数名，如果将一个匿名函数赋值给一个变量，es5的name属性会返回空字符串，而es6的name属性会返回函数名。
6. 箭头函数：函数体内的this对象就是定义时所在的对象，而不是使用时所在的对象。不可以当做构造函数。不可以使用arguments对象，不可以使用yield命令。由于没有this，当然也就不能用call(),apply(),bind()这些方法去改变this的指向。
7. this:如果是普通函数，执行时this应该指向全局对象，但是箭头函数导致this总是指向函数所在的对象。因为箭头函数根本没有自己的this，导致内层的this就是外层代码块的this.
8. 除了this，以下3个变量在箭头函数中也是不存在的，分别指向外层的对应变量：arguments, super, new.target
9. 尾调用：尾调用是指某个函数的最后一步调用另一个函数。尾调用不一定出现在函数尾部，只要是最后一步操作即可。
10. 尾调用优化：函数调用会在内存形成一个调用记录，又称调用帧，保存调用位置和内部变量等信息，所有的调用帧就形成一个调用栈。尾调用优化就是只保留内层函数的调用帧。
11. 尾递归：函数调用自身称为递归，如果尾调用自身就称为尾递归，递归非常耗内存，因为需要同时保存成千上百个调用帧，很容易发生栈溢出错误(stack overflow).尾递归的实现往往需要改写递归函数，确保最后一步只调用自身，做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。

### 对象的扩展
1. 属性的简洁表示法
2. 对象的属性名表达式和简洁表示法不能同时使用
3. Object.is用来比较两个值是否严格相等，它与严格比较运算符的行为基本一致。不同之处只有2个：一是+0不等于-0；二是NaN等于自身。
4. Objct.assign用来将源对象(source)的所有可枚举属性复制到目标对象(target)，它至少需要两个对象作为参数，第一个参数是目标对象，后面的参数都是源对象，只要有一个参数不是对象，就会抛出TypeError错误。如果目标对象与源对象有同名属性，或多个源有同名属性，则后面的属性会覆盖前面的属性。Object.assign只复制自身属性，不可枚举的属性和继承的属性不会被复制。
5. Object.assign可以用于为对象添加属性，为对象添加方法，克隆对象，合并多个对象，为属性指定默认值
6. 对象的每个属性都有一个描述对象，用于控制该属性的行为，Object.getOwnPropertyDescriptor可以获取该属性的描述对象。如果enumerable属性的值为false，就表示某些操作会忽略当前属性。ES6有5个操作会忽略enumerable为false的属性：for...in, Object.keys(), JSON.stringify(), Object.assign(), Reflect.enumerable
7. 如何遍历对象的属性：for...in, Object.keys(), Object.getOwnPropertyNames(obj), Object.getOwnPropertySymbols(obj), Reflect.ownKeys(obj), Reflect.enumerable(obj)
8. 属性遍历次序规则：首先遍历所有属性名为数值的属性，按照数字排序；其次遍历所有属性名为字符串的属性，按照生成时间排序；最后遍历所有属性名为Symbol的属性，按照生成时间排序。
9. “__proto__”属性原来读取或设置当前对象的prototype对象。但是最好不要使用这个属性，而是使用Object.setPrototypeOf(), Object.getPrototypeOf() 或 Object.create()

### Symbol
1. ES6引入一种新的原始数据类型Symbol，表示独一无二的值。所以JS语言一共有7种数据类型：Undefined, Null, Boolean, String, Number, Object, Symbol. Symbol值通过Symbol函数生成，只要属性名属于Symbol类型，就是独一无二的，可以保证不会与其他属性名冲突。Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示或转为字符串时比较容易区分。Symbol 函数的参数只表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的。
2. 以Symbol值作为名称的属性不会被常规方法遍历到，我们可以利用这个特性为对象定义一些非私有但又希望只用于内部的方法。
3. Symbol的值作为对象属性名时不能使用点运算符，只能使用方括号，如果不放在方括号中，属性的键名会被当做字符串，而不是Symbol
4. Symbol可以用于消除魔术字符串，魔术字符串是指在代码中多次出现，与代码形成强耦合的某一个具体字符串或数值。消除魔术字符串常用的方法就是把它写成一个变量。
5. Symbol.for()接受一个字符串作为参数，然后搜索有没有以该参数为名称的Symbol值，如果有就返回这个Symbol值，没有就新建并返回一个以该字符串为名称的Symbol值。如果你调用Symbol.for("cat")30次，每次都返回同一个Symbol值，但是调用Symbol("cat")30次，会返回30个不同的Symbol值。
6. es6还提供11个内置的Symbol值，指向语言内部使用的方法。

### Proxy 和 Reflect

### 二进制数组

### Set 和 Map 数据结构
1. Set类似于数组，但是成员的值都是唯一的，没有重复的值。Set内部判断两个值是否不同使用的算法类似于精确相等运算符，唯一的例外是NaN等于自身，而精确相等运算符认为NaN不等于自身。
2. Set实例的属性和方法。属性：Set.prototype.constructor; Set.prototype.size; 方法：add(value), delete(value),has(value),clear()
3. Set实例有4个遍历方法，可用于遍历成员：keys(), values(), entries(), forEach().由于Set结构没有键名，只有键值，所有keys()和values()方法的行为完全一致。
4. 使用Set可以很容易实现并集、交集、差集，去除数组重复元素等。
5. WeakSet与Set类似，但其成员只能是对象，不能是其他类型的值；其次，WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，因此它是不可以遍历的。没有size属性，没有clear()方法。一个用处是储存DOM节点，而不必担心这些节点从文档移除时会引发内存泄露。
6. Map类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当做键，是一种更完善的Hash结构实现。
7. Map的键实际上是跟内存地址绑定，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞的问题，我们扩展别人的库时，如果使用对象作为键名，不用担心自己的属性与原作者的属性同名。如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map就会将其视为一个键，包括0和-0。虽然NaN不严格等于自身，但Map将其视为同一个键。
8. Map实例的属性和方法：属性：size; 方法：set(key, value), get(key), has(key), delete(key), clear()
9. Map原生提供3个遍历器生成函数和一个遍历方法：keys(), values(), entries(), forEach()
10. WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受其他类型的值作为键名，而且键名所指向的对象不计入垃圾回收机制。没有clear()方法，没有size属性。

### Iterator 和 for...of循环
1. ES6创造了一种新的遍历命令for...of，iterator接口主要供for...of消费。iterator的遍历过程是这样的：创建一个指针对象，指定当前数据结构的起始位置，第一次调用指针对象的next()方法，可以将指针对象指向数据结构的第一个成员，第二次调用就指向第二个成员，不断调用直到它指向数据结构的结束位置。next()方法返回一个对象，有着value和done两个属性，value属性表示当前的内部状态的值，是yield语句后面那个表达式的值，done属性是一个布尔值，表示是否遍历结束。
2. 在ES6中，有3类数据结构原生具备iterator接口：数组、某些类似数组的对象，以及Set和Map结构。对于这三类数据结构，不用自己写遍历器生成函数，for...of会自动遍历他们，。其他数据结构的iterator接口，都需要自己在Symbol.iterator属性上部署，这样才会被for...of循环遍历。

### Generator 函数
1. Generator函数的调用方法与普通函数一样，不同的是，调用Generator函数后，该函数并不执行，而是返回一个指向内部状态的指针，也即一个遍历器对象。下一步，必须调用next()方法。使得指针移动到下一个状态。Generator函数是分段执行的，yield函数是暂停执行的标记，而next()方法可以恢复执行。next()方法返回一个对象，有着value和done两个属性，value属性表示当前的内部状态的值，是yield语句后面那个表达式的值，done属性是一个布尔值，表示是否遍历结束。
2. 正常函数只能返回一个值，因为只能执行一次return语句，Generator函数可以返回一系列的值，因为可以有任意多条yield语句。yield不能用在普通函数中，否则会报错。
3. yield语句本身没有返回值，或者说总是返回undefined，next()方法可以带一个参数，该参数会被当做上一条yield语句的返回值。通过next()方法的参数就有办法在Generator函数开始运行后继续向函数体内部注入值。
4. for...of循环可以自动遍历Generator函数，且此时不在需要调用next()方法。
5. 如果在Generator函数内部调用一个Generator函数，默认情况下是没有效果的，这时就需要用到yield*函数，用来在一个Generator函数里面执行另外一个Generato函数

### Promise对象
1. Promise对象是一个构造函数，用来生成Promise实例；代表一个异步操作，有3种状态：Pending(进行中), Resolved(已完成), Rejected(已失败).Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和rejected，他们是两个函数，由JS引擎提供，不需要自己部署。
2. resolve函数的作用是将promise对象的状态从未完成变成成功，在异步操作成功时调用，并将异步操作的结果作为参数传出去；rejected函数的作用是将promise对象从未完成变成失败，在异步操作失败后调用，并将异步操作的结果作为参数传出去。
3. promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。then方法是定义在原型对象Promise.prototype上的，它返回的是一个新的Promise实例，因此可以采用链式写法，即then方法后面再调用一个then方法；采用链式的then可以指定一组按照次序调用的回调函数，前一个回调函数完成后会将结果作为参数传给下一个回调函数。
4. Promise.prototype.catch() 是then(null, rejection)的别名，用于指定发生错误时的回调函数。Promise对象的错误具有冒泡性质，会一直向后传递，直到被捕获为止，跟传统的try/catch不同，如果没有使用catch方法指定错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应。一般来说，不要在then方法中定义rejected状态的回调函数，而应该总是使用catch方法。catch方法返回的还是一个promise对象，因此后面还可以接着调用then方法。
5. Promise.all()方法用于将多个Promise实例包装成一个新的Promise实例，它接受一个数组作为参数，该数组的元素都是promise对象的实例，如果不是，就会先调用Promise.resolve方法将参数转为promise实例
6. Promise.race(), Promise.resolve(), Promise.reject().

### 异步操作和 async 函数
1. ES6诞生前，异步编程的方法大概有以下几种：回调函数，事件监听，发布/订阅，Promise对象
2. 多个回调函数嵌套会造成代码横向发展，出现“回调函数噩梦”；Promise对象就是为了解决这个问题提出的，提供一种新的写法，允许将回调函数的横向加载改成纵向加载，但是代码比较冗余。
3. 传统的编程语言早已有异步编程的解决方案，其中一种叫做协程，意思是多个程序互相协作，完成异步任务。协程遇到yield命令就暂停，等到执行权返回，再从暂停的地方继续往后执行。它的最大优点就是代码的写法非常像同步操作。Generator函数是协程在ES6中的实现，最大的特点就是可以交出函数的执行权，即暂停执行。整个Generator函数就是一个封装的异步任务，或者说是异步任务的容器，异步操作需要暂停的地方，都用yield语句注明。Generator函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。除此之外，它还有两个特性使它可以作为异步编程的完美解决方案：函数体内外的数据交换和错误处理机制。
4. Thunk函数：是一个临时函数，该函数可以接收参数，自身可以作为参数传入函数体。任何函数，只要参数有回调函数，就可以写成Thunk函数的形式。
5. Thunk函数可以用于Generator函数的自动化管理，也即可以自动化执行Generator函数。但Thunk函数并不是Generator函数自动化执行的唯一方案，因为自动执行的关键是，必须有一种机制自动控制Generator函数的流程，接收和交还程序的执行权。回调函数和Promise对象都可以做到。回调函数将异步操作包装成Thunk函数，在回调函数中交回执行权；Promise对象将异步操作包装成Promise对象，用then方法交回执行权。
6. co模块用于Generator函数的自动执行，可以让你不用编写Generator函数的执行器。使用co模块的前提是，Generator函数的yield命令后面只能是Thunk函数或Promise对象
7. co模块支持处理并发的异步操作，即允许某些操作同时进行，等到他们全部完成后才进行下一步，这时，要把并发的操作都放在数组或对象里面，跟在yield语句后面：yield [Promise.resolve(1), Promise.resolve(2)]; yield {1: Promise.resolve(1), 2: Promise.resolve(2)}
8. ES7提供了async函数，就是将Generator函数的星号替换成async，将yield替换成await而已。
9. async函数做的改进：内置执行器，它的执行与普通函数一样，不需要类似co模块的执行器；async函数的await命令后面可以是Promise对象和原始类型的值（数值，字符串和布尔值，但这时等同于同步操作）；返回值是Promise，可以使用then方法指定下一步操作。

### Class
1. 类的数据类型就是函数，类本身指向构造函数；构造函数中的this关键字代表实例对象。
2. Object.assign方法可以很方便地一次向类添加多种方法。
3. 一个类必须有有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
4. 与ES5一样，实例的属性除非显式定义在其本身(this对象)上，否则都是定义在原型，即类上的。
5. 与ES5一样，类的所有实例共享一个原型对象。可以通过实例的__proto__属性为类添加方法，但不建议这样做，因为这会改变类的原始定义，影响到所有实例。
6. Class不存在变量提升，这一点与ES5完全不同，必须保证子类在父类之后定义。
7. 考虑到未来所有的代码其实都运行在模块中，所以ES6实际上把整个语言升级到了严格模式。
8. Class之间可以通过extends关键字实现继承，这比ES5通过修改原型链实现继承要清晰和方便很多。子类必须在constructor方法中调用super方法，否则新建实例将报错。这是因为子类没有自己的this对象，而是继承了父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不得this对象。
9. ES5的继承实质上是先创造子类的实例对象this，然后再将父类的方法添加到this上(Parent.apply(this))。ES6的继承机制完全不同，实质上是先创造父类的实例对象this，然后在子类的构造方法中调用super()，并修改this.
10. Class作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。子类的__proto__属性表示构造函数的继承，总是指向父类；子类的prototype属性的__proto__属性表示方法的继承，总是指向父类的prototype属性。
11. 原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript的原生构造函数有：Boolean(), Number(), String(), Array(), Date(), Function(), RegExp(), Error(), Object()
12. Class内部可以使用get和set关键字对某个属性设置取值函数和存值函数，拦截该函数的存取行为。
13. Class的静态方法：如果在一个方法前加上static关键字，就表示该方法不会被实例继承，而是直接通过类调用。
14. Class的静态属性：指的是Class本身的属性，即Class.propname,而不是定义在实例对象(this)上的属性。但ES6明确规定，Class内部只有静态方法，没有静态属性。看清楚，是内部哦！！！！

### 修饰器
1. 修饰器本质上就是能在编译时执行的函数，用于修改类的行为，是ES7的提案，目前Babel转码器已经支持；修饰器对类行为的改变，是在代码编译时发生的，而不是在运行时。
2. 修饰器函数可以接受三个参数，依次是目标函数、属性名和该属性的描述对象，后两个参数可以省略。如果希望修饰器的行为可以根据目标对象的不同而不同，就要在外面再封装一层函数。
3. 如果想要为类的实例添加方法，可以在修饰器函数中为目标类的prototype属性添加方法。修饰器可以用Object.assign()模拟。
4. 修饰器不仅可以修饰类，还可以修饰类的属性。
5. 修饰器只能用于类和类的方法，不能用于函数，因为存在函数提示。
6. 提供修饰器的第三方模块：core-decorator.js (发布/订阅库：Postal.js)
7. Mixin模式：是对象继承的一种替代方案，中文译为混入，意在一个对象中混入另外一个对象。

### Module
1. ES6的Class只是为了面向对象编程的语法糖，升级了ES5的构造函数的原型链继承的写法，并没有解决模块化的问题。
2. ES6的模块自动采用严格模式，不管有没有在模块头部加上"use strict".
3. export用于规定模块的对外接口，import命令用于输入其他模块提供的功能。一个模块就是一个独立的文件，外部无法获取。如果希望外部能够读取模块内部的某个变量，就必须使用export关键字输出变量。export输出的变量就是本来的名字，但是可以使用as关键字重命名。export命令可以出现在模块的任何位置，只要处于模块顶层即可。export语句输出的信息是动态绑定，绑定其所在的模块，
4. import命令接受一个用大括号表示的对象，里面指定要从其他模块导入的变量名，变量名必须与模块输出的变量名相同。该命令具有提升效果，会提升到整个模块的头部首先执行。
5. module命令可以取代import语句，达到整体输出模块的效果，其后跟着一个变量，表示输出的模块定义在该变量上。
6. 为了方便用户，使其不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。因为一个模块只能有一个默认输出，因此export default命令只能使用一次，所以import命令后面才不用加大括号，因为只可能对应一个输出。
7. ES6模块加载的机制与CommonJS模块完全不同，CommonJS模块输出的是一个值的拷贝，而ES6模块输出的是值的引用。ES6模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。由于ES6输入的模块变量只是一个符号链接，所以这个变量是只读的，对它进行重新赋值会报错。。
8. 循环加载是指a脚本的执行依赖b脚本，而b脚本的执行又依赖a脚本。CommonJS和ES6处理循环加载的方法和返回的结果都是不一样的。CommonJS模块的重要特性是加载时执行，即脚本代码在require时就会全部执行，CommonJS的做法是，一旦出现某个模块被循环加载，就只输出已经执行的部分，还位执行的不会输出。ES6模块是动态引用，遇到模块加载命令import时不会去执行模块，只是生成一个指向被加载模块的引用，需要开发者自己保证真正取值时能够取到值。
9. 垫片库：polyfill 兼容旧环境旧浏览器

### 编程风格
1. 块级作用域：let 取代 var, 因为var存在变量提升效用，let命令则没有这个问题，变量应该先声明后使用。
2. 全局常量和线性安全：let 和 const之间，优先选择const,尤其是在全局环境中，不应该设置变量，应该设置常量。
3. 字符串：静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。
4. 解构赋值：使用数组成员对变量赋值，优先使用解构赋值；函数的参数如果是对象的成员，优先使用解构赋值；如果函数返回多个值，优先使用对象的解构赋值。
5. 对象：单行定义的对象，最后一个成员不以逗号结尾；多行定义的对象，最后一个对象以逗号结尾；如果添加属性不可避免，要使用Object.assign方法。
6. 函数：那些需要使用函数表达式的场合，尽量使用箭头函数，因为这样更简洁，且绑定了this, 且箭头函数取代了Function.prototype.bind, 不要再用self/_this/that绑定this. 布尔值不可以直接作为参数；使用默认值语法设置函数参数的默认值；所有配置项都应该集中在一个对象，放在最后一个参数；不要在函数内使用arguments对象，使用rest运算符代替。
7. Map结构：只有模拟实体对象时才使用Object，如果只是需要key:value的数据结构，则使用Map，因为Map有内建的遍历机制。
8. Class:总是用class取代需要prototype的操作；使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。
9. 模块：Module语法是javascript模块的标准写法，要坚持这种写法，使用import取代require；使用export取代module.exports.如果模块只有一个输出值，就使用export default；如果模块有多个输出值，就不使用export default.不要在模块输入中使用通配符，因为这样可以确保模块中有一个默认输出。如果模块默认输出一个函数，函数名的首字母应该小写；如果默认输出一个对象，对象的首字母应该大写。
10. ESLint 的使用：Airbnb语法规则+.eslintrc文件