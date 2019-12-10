const hapi_auth_github = require('hapi-auth-github')
const login = [
    {
        path: '/login',
        method: 'get',
        handler: function (req, res) {
            var url = hapi_auth_github.login_url();
            console.log(url);
            return {
                url
            }
        }
    },
]
export default login;