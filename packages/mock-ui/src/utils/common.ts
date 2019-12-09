var _ = require('lodash')

var common = {
    startsWith(string: string = '', target: string, position: number = 0) {
        return _.startsWith(string, target, position)
    }
}
export default common