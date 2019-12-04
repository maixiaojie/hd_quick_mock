import projectController from '../controllers/project';
const project = [
    {
        path: '/api/project/add',
        method: 'get',
        handler: projectController.add
    },
    {
        path: '/api/project/get/{project_id}',
        method: 'get',
        handler: projectController.getOne
    },
    {
        path: '/api/project/update/{project_id}',
        method: 'get',
        handler: projectController.update
    },
    {
        path: '/api/project/list/{pageSize}/{pageNum}',
        method: 'get',
        handler: projectController.list
    }
]
export default project;