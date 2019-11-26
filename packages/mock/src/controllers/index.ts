import db from '../model/index'
import common from '../common/index'
const Mock = require('mockjs')
class CommonController {
    async commonHandler(req, res?): Promise<Object> {
        return Mock.mock({
            'list|1-10': [{
                'id|+1': 1
            }]
        })
    }
}
let commonController = new CommonController()
export default commonController;