import common from '../common/index'
import { get_schema } from '../schema/common'
const Boom = require('boom')
type Internals = {
    myMiddleware: any
}

const reqs = function (request, h) {

    let req_pathname = request.url.pathname
    const need_validate = common.startsWith(req_pathname, '/api/')
    if (request.method === 'options') {
        return h.continue;
    } else if (request.method === 'get') {
        if (need_validate) {
            const validate_res = get_schema.validate(request.query)
            if (validate_res.error) {
                let err = Boom.forbidden('缺失公参')
                err.reformat()
                return err
            }
        }
        let { timestamp, ...query } = request.query;
        request.query = query;
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