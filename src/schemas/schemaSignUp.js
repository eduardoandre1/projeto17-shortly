import Joi from "joi";

const schemaSignUp = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword:Joi.ref('password')
})
export default schemaSignUp