type Internals = {
    myMiddleware: any
}

const reqs = function(request, h) {
    if (request.method === 'options') {
        return h.continue;
    }else if(request.method === 'get') {
        let {timestamp, ...params} = request.params;
        request.params = params;
        return h.continue;
    }
    else {
        let {timestamp, ...payload} = request.payload;
        request.payload = payload;
        return h.continue;
    }
}

const internals: Internals = {myMiddleware: reqs}
export const myMiddleware = {
    name: 'myMiddleware',
    version: '1.0.0',
    register: async function(server, options) {
        server.ext('onPreHandler', internals.myMiddleware);
    }
}