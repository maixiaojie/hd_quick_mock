const Joi = require('@hapi/joi')
export const projectAddSchema = Joi.object({
        url: Joi.string().required(),
        desc: Joi.string().required(),
        name: Joi.string().required(),
    })
