const internals = {
    error_no: new Map([
        [200, 'ok']
    ])
}
// request message wrap
export default class RM{
    constructor(options: any = {}) {
        const { error_no = 200, message = 'ok', data = {}} = options
        return {
            error_no,
            data,
            message
        }
    }
}


