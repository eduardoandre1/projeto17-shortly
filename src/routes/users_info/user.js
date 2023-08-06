import { Router } from "express";
import tokenvalidade from "../../middlewares/token_validate.js";
import my_profile from "../../controllers/my_profile_get.js";
import rank from "../../controllers/rank_list.js";

const user = Router()
user.get("/users/me",tokenvalidade,my_profile)
user.get("/ranking",rank)

export default user