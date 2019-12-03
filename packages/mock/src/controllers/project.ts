import db from '../model/mongo'
class ProjectController {
    async add(req, res?): Promise<Object> {
        try {
            let data = {
               name: 'xxxx项目',
               url: '/des',
               desc:'描述'
            }
            await db.insert('project', data)

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
            let data = await db.find('project', options, { "limit": pageNum, "skip": pageSize })
            let total_num = await db.count('project', options)
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
        let id = req.params.project_id;
        try {
            let data = await db.findOne('project', { _id: db.get_id(id) })
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
        let id = req.params.project_id;
        let data = {
            project_id: '2'
        }
        try {
            let selector = { _id: db.get_id(id) }
            //全量更新
            let res = await db.updateOne('project', selector, data, {})
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
let projectController = new ProjectController()
export default projectController;