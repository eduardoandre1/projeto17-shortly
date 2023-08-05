import { nanoid } from "nanoid";
import DB from "../database/postgresSQL.js";

export default async function shorten(req,res){
    const token = req.headers['authorization']
    const {url} = req.body
    try{
        const shortUrl = nanoid(10)
        const get_token = await DB.query(`SELECT * FROM "tokens" WHERE token = $1`,[token])
        const date = new Date
        const id = get_token.rows[0].id
        await DB.query(`INSERT INTO urls (id_user,original_url,shorter_url,"createdAt") VALUES ($1,$2,$3,$4)`,[id,url,shortUrl,date])
        return res.status(201).send({id:id,shortUrl:shortUrl}) 
    }catch(err){return res.status(500).send(err.message)}
}