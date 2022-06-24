# Angular仿网易云音乐开发文档

视频课程：https://www.bilibili.com/video/BV1iJ411F7Bf

项目地址：https://github.com/Dust-Dust/AngularNeteaseCloudMusic

项目源码：https://github.com/lycHub/ng-wyy

网易云音乐API：https://binaryify.github.io/NeteaseCloudMusicApi/#/

## 2022年6月17日

### 初始化项目

Angular CLI version 8.3.0

Install ng-zorro-antd，minireset.css

------

导入预设全局样式：

- index.less：全局样式，引入子样式
- layout.less：class样式
- mixins.less：less的快捷函数
- varibles.less：预设颜色和字体的变量
- zorro.less：ng-zorro-antd的默认样式



### 模块化设计

- core：管理功能模块
- share：全局共享模块
- pages：页面管理模块
- services：服务管理模块



### 安装网易云API

Github上下载后压缩包后，解压出文件夹，需要安装依赖

```shell
npm i
```

启动服务

```
node .\app.js

server running @ http://localhost:3000
```



------

新增文件common.type.ts，用于存放各种数据类型



## 2022年6月20日

新增home-routing.module.ts：控制首页的路由

新增home.services.ts：首页的服务器函数（调用API）

新增wy-carousel组件：控制轮播图左右翻页的箭头、圆点



## 2022年6月23日

新增wy-ui.module.ts：用于存放各种通用的样式组件

新增single-sheet组件：设置歌单样式、布局

新增play-count管道：用于格式化歌单播放量



## 2022年6月24日

新增member-card组件：用户登录框

新增singer.service.ts：用于调用关于歌手的API
