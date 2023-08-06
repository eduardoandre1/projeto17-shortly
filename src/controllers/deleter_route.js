import DB from "../database/postgresSQL.js";
export default  async function deleter(req,res){
    const {user_id} = req.finder.rows[0]
    const id = req.params.id
    try{
        const urls = await DB.query(`SELECT urls.user_id as user FROM urls WHERE urls.id = $1`,[id])
        if(urls.rowCount === 0){
            return res.status(401).send("this urls dont exist")
        }
        const url_user = urls.rows[0].user
        if(url_user !== user_id){
            return res.status(401).send("you aren't autorizated to delete this url")
        }
        await DB.query(`DELETE FROM urls WHERE urls.id = $1`,[id])
    }catch(err){return res.status(500).send(err.message)}
    return res.sendStatus(204)
}