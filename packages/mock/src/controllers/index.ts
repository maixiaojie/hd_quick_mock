import db from '../model/index'
import common from '../common/index'
const Mock = require('mockjs')

class CommonController {
    async commonHandler(req, res?): Promise<Object> {
        let pathname = req.url.pathname;
        let isMockRouter = common.startsWith(pathname, '/mock');
        let isApiRouter = common.startsWith(pathname, '/api');

        if (isMockRouter) {
            return CommonController.mockHandler(req, res)
        } else if (isApiRouter) {
            return CommonController.apiHandler(req, res)
        } else {
            return Mock.mock({
                'aaaaa|1-10': [{
                    'id|+1': 1
                }]
            })
        }
    }

    static apiHandler(req, res?): Promise<Object> {
        return Mock.mock({
            'list|1-10': [{
                'id|+1': 1
            }]
        })
    }
    static mockHandler(req, res?): Promise<Object> {
        return Mock.mock({
            'listss|1-10': [{
                'idss|+1': 1
            }]
        })
    }
}
let commonController = new CommonController()
export default commonController;