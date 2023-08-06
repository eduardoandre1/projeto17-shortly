import DB from "../database/postgresSQL.js"

export default async function my_profile(req,res){
    const {user_id} = req.finder.rows[0]
    try{
        const user_data = await DB.query(
            `SELECT 
            "Users".id as userid, "Users".name,
            urls.id,urls.original_url as url,
            urls.shorter_url as "shortUrl",
            urls.viens as "visitCount"
            FROM "Users"
            JOIN urls
            ON "Users".id = urls.user_id
            WHERE "Users".id = $1`,[user_id])
        const user_data_formated = {
            id:user_data.rows[0].userid,
            name:user_data.rows[0].name,
            visitCount: user_data.rows.reduce((total,valor)=>{return total =total + valor.visitCount},0),
            shortenedUrls: user_data.rows.map((value)=>{return{id:value.id,shortUrl:value.shortUrl,visitCount:value.visitCount,url:value.url}})
        }
        return res.status(200).send(user_data_formated)
    }catch(err){return res.status(500).send(err.message)}
}