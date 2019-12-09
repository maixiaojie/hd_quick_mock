const Joi = require('@hapi/joi')
export const get_schema = Joi.object({
    timestamp: Joi.string().required()
})