import DB from "../database/postgresSQL.js";
export default async function rank(req,res){
    try{
        const rank = await DB.query(`
        SELECT "Users".name, SUM(urls.viens) as "visitCount",COUNT(urls.user_id) as "linksCount","Users".id as id
          FROM "Users" JOIN urls ON "Users".id = urls.user_id 
          GROUP BY "Users".name,"Users".id
          ORDER BY SUM(urls.viens) DESC
          LIMIT  10`)
        console.log(rank.rows)
        return res.status(200).send(rank.rows)
    }catch(err){return res.status(500).send(err.message)}
}