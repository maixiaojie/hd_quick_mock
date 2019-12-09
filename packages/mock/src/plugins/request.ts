import common from '../common/index'
import { get_schema } from '../schema/common'
const Joi = require('@hapi/joi')
type Internals = {
    myMiddleware: any
}

const reqs = function (request, h) {
    let req_pathname = request.url.pathname
    const need_validate = common.startsWith(req_pathname, '/api')
        if (request.method === 'options') {
            return h.continue;
        } else if (request.method === 'get') {
            if (need_validate) {
                console.log(1)
                // todo 捕获异常  直接返回
                Joi.assert(request.params, get_schema)
            }
            let { timestamp, ...params } = request.params;
            request.params = params;
            return h.continue;
        }
        else {
            let { timestamp, ...payload } = request.payload;
            request.payload = payload;
            return h.continue;
        }
    
}

const internals: Internals = { myMiddleware: reqs }
export const myMiddleware = {
    name: 'myMiddleware',
    version: '1.0.0',
    register: async function (server, options) {
        server.ext('onPreHandler', internals.myMiddleware);
    }
}