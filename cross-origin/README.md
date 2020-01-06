### CORS机制
1. cors机制允许服务器进行跨域访问控制
2. 对于附带身份凭证的请求，服务器不得设置Access-Control-Allow-Origin的值为*
3. 如果需要跨域，浏览器不会在请求头上带上cookie，需要通过XMLHttpRequest的withCredentials设置为true

### options机制
跨域请求的情况下，post请求前会先使用OPTIONS方法发起一个预检请求，因为post请求可能对服务器数据产生副作用，浏览器必须预先通过发送一个预检请求给服务端，确定是否允许该请求，允许则发起实际的请求
