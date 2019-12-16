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
        handler: custom_handler,
        BASE_URL: 'http://localhost:3001',
        GITHUB_CLIENT_ID: '46c59fe3e7027e438a7c',
        GITHUB_CLIENT_SECRET: '5f834d9347cbb684c649ca670a02d9aa2d1886fa',
        GITHUB_AUTH_REDIRECT_URL: '/github_auth',
        PORT: 3001,
        GITHUB_HOSTNAME: 'github.com',
        GITHUB_API_HOSTNAME: 'api.github.com'
    }
}]