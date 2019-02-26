# electron

electron运用(html,css,js)等web技术构建桌面应用

```js
# 克隆示例项目的仓库 脚手架
git clone https://github.com/electron/electron-quick-start

# 进入这个仓库
$ cd electron-quick-start

# 安装依赖并运行
$ npm install

# 启动
npm start
```
安装完毕之后
- .gitignore(git上传提交时候过滤文件)
- index.html(ele应用页面主入口，前端)
- main.js(控制ele应用的后台文件，后端)
- package.json(记录ele应用的依赖，和启动命令)
- renderer.js(配合index.html使用的了逻辑文件，控制前端的逻辑，去调用nodejs api)

打开之后，会发现是一个app，你要关闭这个app，交互是跟网页版本不一样

<img src="1.png" />