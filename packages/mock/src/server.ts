import * as hapi from 'hapi';
import routers from './routers/index'
import ApiRouters from './routers/api'
import projectRouters from './routers/project'
import indexController from './controllers/index';
import { myMiddleware } from './plugins/request'
const server: hapi.Server = new hapi.Server({
    host: 'localhost',
    port: 3001,
    routes: { cors: { origin: ['*'] } }
});

server.route({ method: "*", path: '/{p*}', handler: indexController.commonHandler });
server.route(routers);
server.route(ApiRouters);
server.route(projectRouters);
async function start() {
    try {
        await server.register(myMiddleware)
        await server.start();
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
    console.log("server running at:", server.info.uri);
}
start();
