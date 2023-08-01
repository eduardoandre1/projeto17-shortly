import Joi from "joi";

export default schema_login = Joi.object({
    name: joi.string().required(),
    email: joi.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().required(),
    confirmPassword:Joi.ref('password').required()
})