import { github_auth } from '../plugins/github-auth'
const login = [
    {
        path: '/login',
        method: 'get',
        handler: function (req, res) {
            var url = github_auth.login_url();
            return {
                url
            }
        }
    },
]
export default login;