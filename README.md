# Express-api-示例

此项目是通过 Express 实现的 api 接口。

## 目录结构

```
├── config	# 配置文件
│   └── config.default.js
├── controller	# 用于解析用户的输入，处理后返回相应的结果
├── model	# 数据持久层
├── middleware	# 用于编写中间件
├── router	# 用于配置 URL 路由规则
├── util	# 工具模块
└── app.js	# 用于自定义启动时的初始化工作
```

## 常用中间件配置

- 通过 [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html) 解析请求体

- - bodyParser.urlencoded({ extended: false }
  - bodyParser.json()

- 日志输出

- - [morgan()](http://expressjs.com/resources/middleware/morgan.html)

- 为客户端提供跨域资源请求

- - [cors()](http://expressjs.com/en/resources/middleware/cors.html)
