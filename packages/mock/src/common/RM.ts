const internals = {
    error_no: new Map([
        [0, 'ok']
    ])
}
// response message wrap
export default class RM{
    constructor(options: any = {}) {
        const { error_no = 0, message = 'ok', data = {}} = options
        return {
            error_no,
            data,
            message
        }
    }
}


