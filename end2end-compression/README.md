### 端到端压缩
Accept-Encoding: gzip, deflate, br
Content-Encodeing: gzip

### 性能优化
分模块引用，而不是整个包引进来
webpack配置：optimization => splitChunks
按需加载路由、按需加载组件
压缩成gzip文件，传输会更快
