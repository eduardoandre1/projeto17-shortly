import { Router } from "express";
import tokenvalidade from "../../middlewares/token_validate.js";
import shorten from "../../controllers/shorten_maker.js";
import input_validate from "../../middlewares/input_validate.js";
import schema_url from "../../schemas/schema_url.js";

const urls = Router()
urls.post('/urls/shorten',input_validate(schema_url),tokenvalidade,shorten)

export default urls