const haiGithubAuth = require('hapi-github-auth')
const login = [
    {
        path: '/login',
        method: 'get',
        handler: function (req, res) {
            var url = haiGithubAuth.plugin.login_url();
            return {
                url
            }
        }
    },
]
export default login;