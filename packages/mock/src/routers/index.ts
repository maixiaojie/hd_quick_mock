import orderController from '../controllers/order';
console.log(orderController)
const routers = [
    {
        path: '/',
        method: 'GET',
        handler: (request, h) => {
            return h.response('pppppppppp').code(200);
        }
    },
    {
        path: '/order/add',
        method: 'post',
        handler: orderController.add
    },
    {
        path: '/order/list/{pageNum}/{pageSize}',
        method: 'get',
        handler: orderController.list
    }
]
export default routers;