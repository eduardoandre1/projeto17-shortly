import { Router } from "express";
import login from "./login/login.js";


const router = Router()
router.use(login)
export default router