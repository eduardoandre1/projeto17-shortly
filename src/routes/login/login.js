import { Router } from 'express'
import input_validate from '../../middlewares/input_validate.js'
import schema_login from '../../schemas/schema_login.js'
import alredy_have_pg from '../../middlewares/already_have.js'
const login = Router()
login.post("signup",input_validate(schema_login),alredy_have_pg(`users`,'email','email'))
