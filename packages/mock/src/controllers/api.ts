import db from '../model/mongo'
const Mock = require('mockjs')
class ApiController {
    async add(req, res?): Promise<Object> {
        try {
            let data = {
                project_id: '1',
                method: 'POST',
                url: '/mock/shop/add',
                desc: '接口描述',
                params: [{
                    name: 'pageSize',
                    type: 'int',
                    desc: '每页数目',
                    require: true
                }, {
                    name: 'pagenum',
                    type: 'int',
                    desc: '每页数目',
                    require: true
                }],
                mockJson: {
                    'apilist|1-10': [{
                        'id|+1': 1
                    }]
                }
            }
            await db.insert('api', data)

            return {
                error_no: 0,
                data: [],
                error_msg: ''
            }
        } catch (e) {
            return {
                error_no: 1,
                data: e,
                error_msg: '添加失败'
            }
            console.log(e)
        }

    }

    async list(req, res?): Promise<Object> {
        var pageSize = parseInt(req.params.pageSize) || 1;
        var pageNum = parseInt(req.params.pageNum) || 10;
        try {
            let options = {
                project_id: '1'
            }
            let data = await db.find('api', options, { "limit": pageNum, "skip": pageSize })
            let total_num = await db.count('api', options)
            return {
                error_no: 0,
                data: {
                    total_num,
                    list: data
                },
                error_msg: ''
            }
        } catch (e) {
            console.log(e)
            return {
                error_no: 1,
                data: e,
                error_msg: '查询失败'
            }
        }
    }

    async getOne(req, res?): Promise<Object> {
        let id = req.params.api_id;
        try {
            let data = await db.findOne('api', { _id: db.get_id(id) })
            return {
                error_no: 0,
                data,
                error_msg: ''
            }
        } catch (e) {
            console.log(e)
            return {
                error_no: 1,
                data: e,
                error_msg: '查询失败'
            }
        }
    }

    async update(req, res?): Promise<Object> {
        let id = req.params.api_id;
        let data = {
            project_id: '2'
        }
        try {
            let selector = { _id: db.get_id(id) }
            //全量更新
            let res = await db.update('api', selector, data, {})
            return {
                error_no: 0,
                data: [],
                error_msg: ''
            }
        } catch (e) {
            console.log(e)
            return {
                error_no: 1,
                data: e,
                error_msg: '更新失败'
            }
        }
    }
}
let apiController = new ApiController()
export default apiController;