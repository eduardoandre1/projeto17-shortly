import { Router } from 'express'
import inputValidate from '../../middlewares/inputValidate.js'
import alredyHavePg from '../../middlewares/alreadyHave.js'
import schemaSignUp from '../../schemas/schemaSignUp.js'
import schemaSignIn from '../../schemas/schemaSignIn.js'
import SignUp from '../../controllers/signUp.controller.js'
import signIn from '../../controllers/signIn.controller.js'
const login = Router()
login.post('/signup', inputValidate(schemaSignUp), alredyHavePg('Users', 'email', 'email'), SignUp)
login.post('/signin', inputValidate(schemaSignIn), signIn)

export default login
