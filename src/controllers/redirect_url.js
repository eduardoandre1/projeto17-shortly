import DB from "../database/postgresSQL.js";
export default async function redirect_url(req,res){
    const short_url = req.params.shortUrl
    try{
        const url = await DB.query(`SELECT urls.original_url as url FROM urls WHERE urls.shorter_url = $1`,[short_url])
        console.log(url.rows)
        if(url.rowCount !== 1){
            return res.status(404).send('shorted url invalided')
        }
        return res.redirect(url.rows.co)
    }catch(err){return res.status(500).send(err.message)}

}