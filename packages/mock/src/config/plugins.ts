import custom_handler from '../auth/github'
let pino = {
    plugin: require('hapi-pino'),
    options: {
        prettyPrint: process.env.NODE_ENV !== 'production',
        mergeHapiLogData: true
    }
}
export default [{
    plugin: require('hapijs-status-monitor')
}, {
    plugin: require('hapi-github-auth'),
    options: {
        SCOPE: 'user',
        handler: custom_handler
    }
}]