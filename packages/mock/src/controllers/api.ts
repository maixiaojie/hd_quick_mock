import db from '../model/index'
import common from '../common/index'
const Mock = require('mockjs')
class ApiController {
    async add(req, res?): Promise<Object> {
        return Mock.mock({
            'api|1-10': [{
                'id|+1': 1
            }]
        })
    }

    list(req, res?): Promise<Object> {
        return Mock.mock({
            'apilist|1-10': [{
                'id|+1': 1
            }]
        })
    }
}
let apiController = new ApiController()
export default apiController;