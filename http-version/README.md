### 2.0和1.0的区别
1. 使用的是二进制协议而不是文本协议
2. 头部压缩
3. 多路复用
4. 允许服务器在客户端缓存中填充数据
  
### http 连接方式
1. 短连接
2. 长连接
3. 流水线
   
### http1.x 如何升级协议
请求头加上：
1. Connection: Upgrade
2. Upgrade: http2 或 websocket

### 基于http的API
1. XMLHttpRequest
2. Fetch API
3. Websocket