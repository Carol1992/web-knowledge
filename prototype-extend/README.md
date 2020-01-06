### 原型链
每个实例对象都有一个私有属性__proto__指向它的构造函数的prototype 该原型对象也有一个__proto__指向它的构造函数的prototype 一层一层往上指，直到null  
prototype 用于构造函数，getProtypeOf 用于实例

```js
Object.prototype.__proto__ === null
Function.prototype.__proto__ === Object.prototype
Array.prototype.__proto__ === Object.prototype

Object.__proto__ === Function.prototype
Function.__proto__ === Function.prototype
Array.__proto__ === Function.prototype
```

```js
function Foo() {
  this.value = 42;
}
Foo.prototype = {
  method: function() {}
};

function Bar() {}

// Set Bar's prototype to a new instance of Foo
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// Make sure to list Bar as the actual constructor
Bar.prototype.constructor = Bar;

var test = new Bar(); // create a new bar instance

// The resulting prototype chain
test [instance of Bar]
  Bar.prototype [instance of Foo]
      { foo: 'Hello World' }
      Foo.prototype
          { method: ... }
          Object.prototype
              { toString: ... /* etc. */ }
```

```js
//Using hasOwnProperty is the only reliable method to check for the existence of a property on an object. 
//It is recommended that hasOwnProperty be used in many cases when iterating over object properties as described in the section on for in loops.
//It is recommended to always use hasOwnProperty in ECMAScript 3 or lower, as well as in library code. 
//Assumptions should never be made in these environments about whether the native prototypes have been extended or not. 
//Since ECMAScript 5, Object.defineProperty makes it possible to define non-enumerable properties and to omit hasOwnProperty in application code.
var foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // always returns false

// Use another Object's hasOwnProperty and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true

// It's also possible to use hasOwnProperty from the Object
// prototype for this purpose
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
```

### 继承
如果希望实例对象具有默认值，并且希望修改后所有实例都跟着修改，则应该在原型上设置而不是在构造函数上设置
JS不支持多重继承，是一种基于原型而不是基于类的面向对象语言

### 相等
x !== x 成立的唯一情况是x === NaN

### this
```js
//this inside of foo will be set to bar foo中的this指的是bar
function foo(a, b, c) {}

var bar = {};
foo.apply(bar, [1, 2, 3]); // array will expand to the below
foo.call(bar, 1, 2, 3); // results in a = 1, b = 2, c = 3
```

```js
Foo.method = function() {
    function test() {
        // this is set to the global object
    }
    test();
}
Foo.method = function() {
    var self = this;
    function test() {
        // Use self instead of this here
    }
    test();
}
Foo.method = function() {
    var test = function() {
        // this now refers to Foo
    }.bind(this);
    test();
}
```

### 变量引用
```js
for(var i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);  
        }, 1000);
    })(i);
}
for(var i = 0; i < 10; i++) {
    setTimeout((function(e) {
        return function() {
            console.log(e);
        }
    })(i), 1000)
}
for(var i = 0; i < 10; i++) {
    setTimeout(function(e) {
        console.log(e);  
    }, 1000, i);
}
for(var i = 0; i < 10; i++) {
    setTimeout(console.log.bind(console, i), 1000);
}
```

### 命名空间
```js
// A few other styles for directly invoking the 
!function(){}()
+function(){}()
(function(){}());
// and so on...
```

### 数组
In order to achieve the best performance when iterating over arrays, it is best to use the classic for loop.
使用for in 会慢20倍左右
```js
var arr = [1, 2, 3, 4, 5, 6];
arr.length = 3;
arr; // [1, 2, 3]

arr.length = 6;
arr.push(4);
arr; // [1, 2, 3, undefined, undefined, undefined, 4]
```

### typeof
Unless checking whether a variable is defined, typeof should be avoided.
```js
typeof foo !== 'undefined'
```
In order to check the type of an object, it is highly recommended to use Object.prototype.toString because this is the only reliable way of doing so. 
As shown in the above type table, some return values of typeof are not defined in the specification; thus, they can differ between implementations.

### instanceof
The instanceof operator compares the constructors of its two operands. It is only useful when comparing custom made objects. Used on built-in types, it is nearly as useless as the typeof operator.

### 类型转换
```js
By using the not operator twice, a value can be converted to a boolean.
!!'foo';   // true
!!'';      // false
!!'0';     // true
!!'1';     // true
!!'-1'     // true
!!{};      // true
!!true;    // true
```

### eval
eval should never be used. Any code that makes use of it should be questioned in its workings, performance and security. 
If something requires eval in order to work, it should not be used in the first place. A better design should be used, that does not require the use of eval

### delete
Variable and function declarations in global and function code always create properties with DontDelete, and therefore cannot be deleted.
```js
// this works fine, except for IE:
var GLOBAL_OBJECT = this;
GLOBAL_OBJECT.a = 1;
a === GLOBAL_OBJECT.a; // true - just a global var
delete GLOBAL_OBJECT.a; // true
GLOBAL_OBJECT.a; // undefined
```

### setTimeout
The function that was passed as the first parameter will get called by the global object, which means that this inside the called function refers to the global object.

