import { Router } from 'express'
import tokenValidade from '../../middlewares/tokenValidate.js'
import myProfile from '../../controllers/myProfile.controller.js'
import rank from '../../controllers/rankList.controller.js'

const user = Router()
user.get('/users/me', tokenValidade, myProfile)
user.get('/ranking', rank)

export default user
