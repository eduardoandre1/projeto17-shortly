import { Router } from "express";
import tokenvalidade from "../../middlewares/token_validate.js";
import shorten from "../../controllers/shorten_maker.js";
import input_validate from "../../middlewares/input_validate.js";
import schema_url from "../../schemas/schema_url.js";
import list_urls from "../../controllers/list_urls.js";
import redirect_url from "../../controllers/redirect_url.js";
import deleter from "../../controllers/deleter_route.js";

const urls = Router()
urls.post('/urls/shorten',input_validate(schema_url),tokenvalidade,shorten)
urls.get("/url/:id",list_urls)
urls.get("/urls/open/:shortUrl",redirect_url)
urls.delete("/urls/:id",tokenvalidade,deleter)

export default urls