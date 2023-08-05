import { Router } from "express";
import login from "./login/login.js";
import urls from "./urls/urls.js";

const router = Router()
router.use(login)
router.use(urls)
export default router