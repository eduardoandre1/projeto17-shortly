import { Router } from "express";
import tokenValidade from "../../middlewares/tokenValidate.js";
import shorten from "../../controllers/shortenMaker.js";
import inputValidate from "../../middlewares/inputValidate.js";
import schemaUrl from "../../schemas/schemaUrl.js";
import listUrls from "../../controllers/listUrls.js";
import redirectUrl from "../../controllers/redirectUrl.js";
import deleter from "../../controllers/deleterRoute.js";

const urls = Router()
urls.post('/urls/shorten',inputValidate(schemaUrl),tokenValidade,shorten)
urls.get("/urls/:id",listUrls)
urls.get("/urls/open/:shortUrl",redirectUrl)
urls.delete("/urls/:id",tokenValidade,deleter)

export default urls