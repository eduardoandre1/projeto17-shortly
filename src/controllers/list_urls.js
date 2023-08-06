import DB from "../database/postgresSQL.js";
export default async function list_urls(req,res){
    const id = req.params.id
    try{
        const finder = await DB.query(`SELECT urls.id as id,urls.shorter_url as "shortUrl",urls.original_url as url FROM urls WHERE urls.id = $1`,[id])
        if(finder.rowCount === 0){
            return res.sendStatus(404)
        }
        return res.status(200).send(finder.rows[0])
    }catch(err){return res.status(500).send(erro.message)}
}