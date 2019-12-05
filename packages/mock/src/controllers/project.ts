import db from '../model/mongo'
class ProjectController {
    async add(req, res?): Promise<Object> {
        try {
            let data = Object.assign(req.payload, {
                ctime: +new Date()
            })
            let res: any = await db.find('project', { "url": req.payload.url })
            if(res && res.length > 0) {
                return {
                    error_no: 1,
                    data: [],
                    error_msg: '该项目url已经存在'
                }
            }else {
                await db.insert('project', data)
                return {
                    error_no: 0,
                    data: [],
                    error_msg: ''
                }
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
        var pageNum = parseInt(req.params.pageNum) || 1;
        var pageSize = parseInt(req.params.pageSize) || 10;
        try {
            let skip = (pageNum - 1 ) * pageSize;
            let data = await db.find('project', {}, { "limit": pageSize, "skip": skip })
            let total_num = await db.count('project')
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