import apiController from '../controllers/api';
const api = [
    {
        path: '/api/add',
        method: 'get',
        handler: apiController.add
    },
    {
        path: '/api/get/{api_id}',
        method: 'get',
        handler: apiController.getOne
    },
    {
        path: '/api/update/{api_id}',
        method: 'get',
        handler: apiController.update
    },
    {
        path: '/api/list/{pageSize}/{pageNum}',
        method: 'get',
        handler: apiController.list
    }
]
export default api;