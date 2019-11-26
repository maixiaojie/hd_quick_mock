import indexController from '../controllers/index';
console.log(indexController)
interface Router {
    path: string
    method: string
    id: string
    handler?: object
}
const ApiList: Router[] = [{
    path: '/a',
    method: 'GET',
    id: '14'
},{
    path: '/b',
    method: 'GET',
    id: '13'
},{
    path: '/ab',
    method: 'GET',
    id: '12'
}]

const routers = ApiList.map(item => {
    item.handler = indexController.commonHandler
    delete item.id
    return item
})
export default routers;