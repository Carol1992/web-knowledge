#### 网络知识
```js
1. 正向代理：服务器不知道真正的请求方是谁，比如我在国内访问google.com会被GFW墙，如果我在国外有一台服务器，并且这台服务器的IP地址不在GFW的黑名单中，那么我去访问这台服务器，这台服务器再去访问谷歌，将得到的内容打包发给我，就可以访问到google.com的内容了
2. 反向代理：客户端不知道真正提供服务的是哪台服务器，客户端通常是去访问负载均衡设备，如nginx服务器，然后负载均衡设备将这成千上万的请求分发到成百上千的服务器群中，所以客户端不知道给自己提供服务的是哪一台服务器。
server {
    listen: 80;
    server_name: www.linyaqing.com;
    localtion / {
        proxy_pass: http://127.0.0.1:3000
    }
}

curl -I http://baidu.com  //请求该网站

nslookup baidu.com  //列出指向该域名的所有IP地址

traceroute baidu.com  //跟踪路由转发，从本机IP地址到目标IP地址之间结果哪些路由转发
```

#### 常用vim语法
```js
h,k,k,l: 光标位置左下上右

ESC: 关闭插入模式

A:插入到行的开始位置

I:插入到行的最后位置

dd:删除光标所在行

S:删除光标所在行并进入编辑模式

dw:删除一个字符

u:撤销上一步操作

ctrl+r:恢复上一步操作

q!:强制关闭

q:关闭，已保存

w:保存

v:选中一个或多个字符

V：选中一行

yw:复制一个单词

[N]yy:复制一行或多行

p:粘贴
```

#### 常用linux命令行
```js
cp main.html main2.html

mv main2.html main3.html

rm main3.html

mkdir test

rm test -r

dpkg --list

apt-get --purge remove <programname>
```

#### 在C:\Windows\System32\drivers\etc目录下打开hosts文件，如下图，写ip地址，空格自己的域名。这样在自己电脑ping域名www.test.com，解析指向ip就是1.1.1.1了(window解析常识，在浏览器访问域名时，会首先从dns缓存，host文件去获取域名对应ip，如果都没有，才会用本地dns去获取域名解析指向的ip，具体可以网上查找相关文档)

#### node起一个服务器
```js
var http = require('http')
var url = require('url')

http.createServer(function(req, res) {
    res.writeHead('200',{'Content-Type': 'text/plain'});
    var q = url.parse(req.url, true).query;
    res.write(q.year + ' ' + q.month);
    res.end();
}).listen(8080);

//  http://localhost:8080/?year=2017&month=July
//  req 代表来自客户端的请求，req.url代表域名后跟的那串url
```

#### 卸载、更新、搜索、创建模块
1. npm uninstall moduleName
2. npm update moduleName
3. npm search moduleName
4. npm publish


#### 回调函数
```js
var fs = require('fs')
fs.readFile('input.txt', function(err, data) {
    if(err) return console.error(err)
    console.log(data.toString())
})
```

#### 事件循环
1. Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高。
2. Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。
3. Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。
4. Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.
```js
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。

var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕。");
```

#### EventEmitter
1. 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
2. EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。
3. EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
```js

```

#### Buffer
1. JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
2. 在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
```js
//创建Buffer类
var buf = new Buffer(10);
var buf = new Buffer([10,20,30,40,50]);
var buf = new Buffer('www.baidu.com', 'utf-8');
//写入缓冲区(string是写入缓冲区的字符串，offset是缓冲区开始写入的索引值，默认是0，length是写入的字节数，默认是buffer.length，encoding是编码，默认是utf8)
buf.write(string[,offset[,length]][,encoding]) //返回实际写入的大小
//从缓冲区读取数据
buf.toString([encoding[,start[,end]]])
// buffer转化为JSON对象
buf.toJSON()
//缓冲区合并(list是用于合并的Buffer对象数组列表，totalLength指定合并后Buffer对象的总长度)
Buffer.concat(list[,totalLength])
//缓冲区比较
bug.compare(otherBuffer) //返回一个数字表示buf在otherBuffer之前、之后或相同
//拷贝缓冲区
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
//缓冲区裁剪
buf.slice([start[,end]]) //返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
```

#### Stream
1. 是一个抽象接口，有4种流类型：可读操作、可写操作、可读可写操作、操作被写入数据然后读出结果
2. 所有stream对象都是eventemitter的实例，常用的事件有：data, end, error, finish
3. 从流中读取数据：
```js
var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf8');
readerStream.on('data', function(chunk){
    data += chunk;
});
readerStream.on('end', function(){
    console.log(data);
});
readerStream.on('error', function(err){
    console.log(error.stack);
});
```
4. 写入流
```js
var fs = require('fs');
var data = 'something';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'utf8');
writerStream.end();
writerStream.on('finish', function(){
    console.log('写入完成');
})
```
5. 管道流
```js
var fs = require('fs');
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);
```
6. 链式流(用管道和链式流来压缩和解压文件)
```js
//  创建 compress.js 文件
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log('文件压缩完成');

//  创建 decompress.js 文件
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));
console.log('解压完成');
```

#### 模块系统
1. 模块是nodejs应用程序的基本组成部分。文件和模块是一一对应的，一个nodejs问价就是一个模块，这个文件可能是javascript代码、json文件或编译过的c/c++扩展
2. nodejs中存在4类模块：原生模块和3种文件模块
3. require方法中的文件查找策略


#### 路由
1. 我们要为路由提供请求的URL和其他需要的GET及POST参数，随后路由根据这些数据来执行相应的代码

#### 全局对象
1. Global 是全局对象，nodejs中可以直接访问到全局变量而不需要包含它
2. _filename 表示当前正在执行的脚本文件名，它将输出当前文件所在位置的绝对路径
3. _dirname 表示当前执行脚本所在的目录
4. process是一个全局变量，它用于描述当前nodejs进程状态的对象，提供了一个与操作系统对接的简单接口。常见事件：exit, beforeExit, uncaughtException, Signal


#### 常用工具
1. JavaScript的面向对象是基于原型继承的，跟基于类继承的不同。JavaScript没有提供对象继承的语言级别特性，而是通过复制**原型**来实现的。只会继承原型中定义的属性和函数，而不会继承构造函数中定义的属性和函数。
2. util是一个nodejs核心模块，提供常用函数的集合，用于弥补核心javascript的功能过于精简的不足。
3. util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。
4. util.inspect(object[,showHidden][,depth][,color])是一个将任意对象转换伟字符串的方法，通常用于调试和错误输出
5. util.isArray(object)判断给定的参数是否是一个数组，返回true或false
6. util.isRegExp(object)判断给定的参数是否是一个正则表达式
7. util.isDate()
8. util.isError()

#### 文件系统
1. 文件系统模块中的方法均有同步和异步版本，例如读取文件内容的函数有异步的fs.readFile()和同步的fs.readFileSync()
2. fs.open(path, flags[,mode], callback)  //打开文件，callback带有2个参数(err, fd)
3. fs.stat(path, callback) //callback带有2个参数(err, stats)
4. fs.writeFile(file, data[, options], callback)
5. fs.read(fd, buffer, offset, length, position, callback)
6. fs.close(fd, callback)
7. fs.ftruncate(fd, len, callback) //异步模式下截取文件
8. fs.unlink(path, calllback) //删除文件
9. fs.mkdir(path[, mode], callback) //创建目录
10. fs.readdir(path, calalback) //读取目录，回调函数有两个参数err, files, files为目录下的文件数组列表
11. fs.rmdir(path, callback)
12. 


#### GET/POST请求
1. 获取URL参数
```js
var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
 
}).listen(3000);
```
2. 获取POST请求内容
```js
var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);
```

#### 工具模块
1. OS模块：提供基本的系统操作函数
2. Path模块：提供了处理和转换文件路由的工具
3. Net模块：用于底层的网络通信，提供了服务端和客户端的操作
4. DNS模块：用于解析域名
5. Domain模块：简化异步代码的异常处理，可以捕捉处理try/catch无法捕捉的

#### Web模块
1. 目前最主流的三个Web服务器是Apache、Nginx、IIS。

#### express框架
以下几个重要的模块是需要与 express 框架一起安装的：

1. body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
2. cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
3. multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
4. express框架核心特性：可以通过设置中间件来相应http请求；定义了路由表用于执行不同的http请求动作；可以通过向模板传递参数来动态渲染HTML页面
5. Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等。
6. 表单上传文件代码：
```js
var express = require('express');
var app = express();
var fs = require("fs");
 
var bodyParser = require('body-parser');
var multer  = require('multer');
 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
 
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
 
app.post('/file_upload', function (req, res) {
 
   console.log(req.files[0]);  // 上传的文件信息
 
   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})
 
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
```
7. 我们可以使用中间件向nodejs服务器发送cookie信息，以下代码输出了客户端发送的cookie信息：
```js
var express      = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies)
})
 
app.listen(8081)
```

#### RESTful API
1. REST 是设计风格而不是标准，通常使用JSON数据格式。
2. 基于 REST 架构的 Web Services 即是 RESTful

#### 多进程
1. 我们都知道 Node.js 是以单线程的模式运行的，但它使用的是事件驱动来处理并发，这样有助于我们在多核 cpu 的系统上创建多个子进程，从而提高性能。
2. 每个子进程总是带有三个流对象：child.stdin, child.stdout 和child.stderr。他们可能会共享父进程的 stdio 流，或者也可以是独立的被导流的流对象。

#### JXcore打包
1. JXcore 是一个支持多线程的 Node.js 发行版本，基本不需要对你现有的代码做任何改动就可以直接线程安全地以多线程运行。

#### 连接mysql数据库
```js
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
```

#### 连接MongoDB数据库
1. 与 MySQL 不同的是 MongoDB 会自动创建数据库和集合，所以使用前我们不需要手动去创建。
```js
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; # 数据库为 runoob
 
var insertData = function(db, callback) {  
    //连接到表 site
    var collection = db.collection('site');
    //插入数据
    var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});
```
