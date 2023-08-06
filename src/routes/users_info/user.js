import { Router } from "express";
import tokenvalidade from "../../middlewares/token_validate.js";
import my_profile from "../../controllers/my_profile_get.js";

const user = Router()
user.get("/users/me",tokenvalidade,my_profile)

export default user