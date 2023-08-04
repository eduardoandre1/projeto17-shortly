import Joi from "joi";

const  schema_sign_in = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().required(),
})
export default schema_sign_in