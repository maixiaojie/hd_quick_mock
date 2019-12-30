const haiGithubAuth = require('hapi-github-auth')
const login = [
    {
        path: '/api/login',
        method: 'get',
        handler: function (req, res) {
            var url = haiGithubAuth.plugin.login_url();
            return {
                error_no: 200,
                data: {
                    url
                }
            }
        }
    },
]
export default login;