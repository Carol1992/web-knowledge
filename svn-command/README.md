参考：https://www.jianshu.com/p/fc8443a9aafe
参考：https://www.jianshu.com/p/0c06f80a2561
#### 服务器
1. 创建版本库: svnadmin create 版本库名称
2. 配置svnserve.conf, authz, passwd
```js
  一个版本库：使用类似这样的URL：svn://192.168.3.9/　即可访问g该版本库
  [groups]
  admin=user1
  dev=user2
  [/]
  @admin=rw
  user2=r

  多个版本库：使用类似这样的URL：svn://192.168.3.9/runoob　即可访问runoob版本库。
  [groups]
  admin=user1
  dev=user2
  [runoob:/]
  @admin=rw
  user2=r

  [runoob01:/]
  @admin=rw
  user2=r
```
3. 启动服务: svnserve -d -r 目录 --listen-port 端口号（listen-port 指定svn监听窗口，没有指定的话默认3690；由于 -r 配置的不同，svn可以有两种不同的访问方式：直接指定到版本库，一个svnserve只能为一个版本库工作；指定到版本库的上级目录，一个svnserve可以为多个版本库工作，称之为多库svnserve方式）
4. 也可以通过visualSVN Server创建

#### 客户端
1. svn 检出: svn checkout svn://192.168.3.9/runoob --username=carol --password=carol 或者 svn checkout https://192.168.3.4/svn/web/
2. svn info
3. svn update
4. svn remove filename
5. svn添加所有文件: svn add * --force
6. svn diff
7. svn diff -r 3 filename (比较当前filename与版本3中的区别)
8. svn diff -r 2:3 filename
9. svn cat r 版本号 filename (查看该版本下filename的内容)
10. svn log
11. svn log -r 1:2
12. svn log filename
13. svn log -l N -v (N 代表限定N条记录，v 代表列出目录信息)
14. svn commit -m "commit"
15. svn update -r6
16. svn status
17. svn revert filename
18. svn revert -R 目录名
19. svn merge -r 版本:版本 . (. 代表当前目录，也可以是文件名)
20. svn list svn://192.168.3.9/runoob01 (在不下载文件到本地目录的情况下查看目录中的文件)
21. svn 分支：
```js
//文件夹web中的内容需要开一个分支
mkdir branches
svn commit -m "add branches"
svn copy web/ branches/new_feature
svn commit -m "add new feature branch"
cd branches/new_feature (在该分支进行开发)
svn add * --force
svn commit -m "开发完成"
cd ../../web
svn merge ../branches/new_feature
svn commit -m "merge"
```
22. svn 标签
```js
mkdir tags
svn commit -m "add tags"
svn copy web/ tags/v1.0
svn commit -m "add new tag"
```