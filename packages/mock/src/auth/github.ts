
// var JWT = require('jsonwebtoken'); // session stored as a JWT cookie

const custom_handler = function (req, reply, tokens, profile) {
    console.log(tokens, profile)
    //   return reply('ok')
    return 1
    // return reply("Sorry, something went wrong, please try again.").code(401);
}

export default custom_handler