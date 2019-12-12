
// var JWT = require('jsonwebtoken'); // session stored as a JWT cookie

const custom_handler = function (req, h, tokens, profile) {
    console.log(tokens, profile)
    return 1
}

export default custom_handler