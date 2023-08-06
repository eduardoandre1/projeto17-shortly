import { Router } from "express";
import login from "./login/login.js";
import urls from "./urls/urls.js";
import user from "./users_info/user.js";

const router = Router()
router.use(login)
router.use(urls)
router.use(user)
export default router