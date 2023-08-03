import { Router } from 'express'
import input_validate from '../../middlewares/input_validate.js'
import alredy_have_pg from '../../middlewares/already_have.js'
import schema_sign_up from '../../schemas/schema_sign_up.js'
import schema_sign_in from '../../schemas/schema_sign_in.js'
import Sign_up from '../../controllers/sign_up.js'
const login = Router()
login.post("/signup",input_validate(schema_sign_up),alredy_have_pg('Users','email','email'),Sign_up)
login.post("/signin",input_validate(schema_sign_in),)

export default login
