import Joi from "joi";

const schema_sign_up = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().pattern(new RegExp('[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword:Joi.ref('password')
})
export default schema_sign_up