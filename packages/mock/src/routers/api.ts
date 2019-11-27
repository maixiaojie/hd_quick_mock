import apiController from '../controllers/api';
const api = [
    {
        path: '/api/add',
        method: 'get',
        handler: apiController.add
    },
    {
        path: '/api/list/{pageNum}/{pageSize}',
        method: 'get',
        handler: apiController.list
    }
]
export default api;