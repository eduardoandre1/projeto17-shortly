import Joi from "joi";

const  schema_url = Joi.object({
    url : Joi.string().uri().required()
})
export default schema_url