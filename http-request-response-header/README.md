### 强制缓存
第一次访问服务器获取到数据后，在过期前都直接从缓存再获取
实现：
1. http1.0: Expires 响应头
2. http1.1: Cache-Control: private, public, max-age=xxx,no-cache, no-store

### 协商缓存
每次读取数据前都要先跟服务器通信，第一次请求服务器会返回资源和一个缓存标识，一起存到浏览器的缓存数据库；第二次请求时，浏览器会先将缓存标识发送到服务器，服务器判断是否匹配，如果匹配则表示资源没有更新，返回304，浏览器从缓存中获取数据，如果不匹配则返回新的泽源和新的缓存标识符
实现：
1. http1.0:Last-Modified/If-Modified-Since
2. http1.1: 服务器返回ETag，浏览器请求时通过If-None-Match请求头带上ETag

### 是否支持范围请求
支持 Accept-Ranges: bytes
不支持 Accept-Ranges: none
请求指定范围 Range: bytes = 0 - 1023, 2023 - 4045
相关状态码：
1. 206 范围请求成功
2. 416 范围请求越界
3. 200 不支持范围请求
