const internals: any = {
    error_no: new Map([
        [0, 'ok']
    ])
}
internals.initialize = function (err, error_no) {
    if (!err.hasOwnProperty('data')) {
        err.data = null
    }
    err.output = {
        error_no,
        statusCode: 300,
        headers: {},
        payload: {
        }
    }
    Object.defineProperty(err, 'reformat', {value: internals.reformat})
    err.reformat()
    return err
}
internals.reformat = function() {
    this.output.payload.statusCode = this.output.statusCode;
    this.output.payload.error = 'errrr'
    this.output.payload.message = this.message
}
// request message wrap
export default class RE extends Error {
    constructor(message, options: any = {}) {
        super()
        const { error_no = 0, data = {}, ctor = RE } = options
        const error: any = new Error(message ? message : undefined)
        Error.captureStackTrace(error, ctor)
        error.data = data;
        const re = internals.initialize(error, error_no)
        Object.defineProperty(re, 'typeof', {value: ctor})
        console.log(re)
        return re
    }
}


