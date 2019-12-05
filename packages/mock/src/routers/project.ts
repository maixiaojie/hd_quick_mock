import projectController from '../controllers/project';
const project = [
    {
        path: '/api/project/add',
        method: 'post',
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
        path: '/api/project/list/{pageNum}/{pageSize}',
        method: 'get',
        handler: projectController.list
    }
]
export default project;