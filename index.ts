import * as grpcWeb from 'grpc-web'; 
import { HealthRequest, HealthReply } from './proto/helloworld_pb';
import { HealthClient } from './proto/HelloworldServiceClientPb';

const enableDevTools = (window as any).__GRPCWEB_DEVTOOLS__ || (() => { });

var client = new HealthClient('http://localhost:8080');

enableDevTools([
  client
]) // 开启调试

var request = new HealthRequest();
request.setName('World');

client.sayHello(request, { Authorization: 'test' }, (err: grpcWeb.RpcError, response: HealthReply) => {
  console.log(response.getMessage());
});