X-Content-Type-Options: nosniff
X-Frame-Options: 是否允许一个页面在frame, iframe, embed, object 等html标签中展示
X-XSS-Protection
Content-Security-Policy
Content-Security-Report-Only
Strict-Transport-Security: max-age=expire-time

### https加密：在应用层和传输 层之间加多一层TSL/SSL层
1. SSL 加密套接字协议层（一种加密的通讯协定，用在使用者与网服器之间，Security Socket Layer），该协议使用了非对称加密算法，对称加密算法，hash算法
2. 浏览器将自己支持的一套加密规则发送给网站
3. 网站从中选出一组加密算法和hash算法，然后将证书发送给浏览器，证书中包含加密公钥
4. 浏览器收到证书后，会生成一串随机数，并使用证书中提供的公钥对其进行加密
5. 使用约定好的hash算法计算握手信息，并使用生成的随机数进行加密，然后发送给网站
6. 网站接收到浏览器发过来的握手消息后，使用私钥解密获取随机数，再使用随机数对握手信息进行解密，并验证hash是否一致
7. 网站使用密码加密握手信息，并发送给浏览器
8. 浏览器解密并计算hash，如果和网站发送回来的一致，则握手过程成功，之后网站所有的通信数据将使用之前浏览器生成的随机密码进行对称加密后传输
9. hash算法：md5, sha1, sha256
10. 对称加密算法：AES，RC4，3DES
11. 非对称加密算法：RSA，DSA/DSS

### OAuth token 
1. OAuth 2.0 是一种授权机制，主要用来颁发令牌（token）
2. 资源所有者同意以后，资源服务器可以向客户端颁发令牌。客户端通过令牌，去请求数据。
3. 获得令牌的方式：授权码，隐藏式，密码式，客户端凭证
4. 第三方应用申请令牌之前，都必须先到系统备案，说明自己的身份，然后会拿到两个身份识别码：客户端 ID（client ID）和客户端密钥（client secret）
