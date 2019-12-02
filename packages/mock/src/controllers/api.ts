import common from '../common/index'
import db from '../model/mongo'
const Mock = require('mockjs')
class ApiController {
    async add(req, res?): Promise<Object> {
        try {
            // await db.insert('user', {name: '文玉杰', age: 20})
            let rs = await db.find('user', {})
            console.log(rs)
            return {
                data: rs
            }
        }catch(e) {
            return {
                data: e
            }
            console.log(e)
        }
        
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