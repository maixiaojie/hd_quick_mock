
var JWT = require('jsonwebtoken'); // session stored as a JWT cookie
import db from '../model/mongo'
const custom_handler = function (req, h, tokens, profile) {
    console.log(tokens, profile)
    if(profile) {
        var session = {
            name: profile.name,
            avatar_url: profile.avatar_url,
            id: profile.id
        }
        var token = JWT.sign(session, 'maixiaojie')
        return {
            token: token,
            userinfo: profile
        }
    }else {
        return {
            error_code: '401',
            error_message: '登录失败'
        }
    }
    
    
}

export default custom_handler