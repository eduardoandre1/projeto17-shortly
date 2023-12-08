import { Router } from "express";
import login from "./login/login.router.js";
import urls from "./urls/urls.router.js";
import user from "./users_info/user.router.js";

const router = Router()
router.use(login)
router.use(urls)
router.use(user)
export default router