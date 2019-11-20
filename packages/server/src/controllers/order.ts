import db from '../model/index'
import common from '../common/index'
class Order {
    async add(req): Promise<Object> {
        let body = req.payload;
        let id = 'order_id_' + common.uuid(23);
        let name = body.name;
        let type = body.type;
        let tel = body.tel;
        let number = body.number;
        let province = body.province;
        let city = body.city;
        let county = body.county;
        let areaCode = body.areaCode;
        let addressDetail = body.addressDetail;
        let postalCode = body.postalCode;
        let ctime = new Date();
        console.log(body)
        let createRs = await db.order.create({
            id,
            name,
            type,
            tel,
            number,
            province,
            city,
            county,
            areaCode,
            addressDetail,
            postalCode,
            ctime
        });
        if (createRs) {
            return {
                code: 1,
                data: createRs,
                msg: '添加成功'
            }
        } else {
            return {
                code: 0,
                data: [],
                msg: '添加失败'
            }
        }
    }
    async list(req) {
        var pageSize = parseInt(req.params.pageSize) || 1;
        var pageNum = parseInt(req.params.pageNum) || 10;
        console.log(req.params)
        let rs = await db.order.findAll({
            attributes: ['id', 'name', 'type', 'tel', 'number', 'province', 'city', 'county', 'areaCode', 'addressDetail', 'postalCode', 'ctime'],
            order: [
                // [sequelize.fn('date', sequelize.col('time')), 'desc'],
                ['ctime', 'desc']
            ],
            limit: pageSize,
            offset: (pageNum - 1) * pageSize
        })
        return {
            code: 1,
            data: rs,
            msg: '查询成功'
        }
    }
}
let order = new Order()
export default order;