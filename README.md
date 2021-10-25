# grpc-web-demo

## 启动方法

```bash
# 配置envoy
$ docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro \
    -p 8080:8080 -p 9898:9898 -p 9901:9901 envoyproxy/envoy:v1.17.0

# 安装依赖
$ yarn 

# 生成proto.js文件
$ yarn pre-compile

# 启动应用
$ yarn dev
```