import * as hapi from 'hapi';
import routers from './routers/index'
import ApiRouters from './routers/api'
import indexController from './controllers/index';
const server: hapi.Server = new hapi.Server({
    host: 'localhost',
    port: 3001,
    routes: {cors: {origin: ['*']} }
});

server.route({method: "*", path: '/{p*}', handler: indexController.commonHandler});
server.route(routers);
server.route(ApiRouters);
async function start() {
    try {
        await server.start();
    }catch(e) {
        console.log(e);
        process.exit(1);
    }
    console.log("server running at:", server.info.uri);
}
start();
