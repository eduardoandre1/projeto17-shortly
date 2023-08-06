import DB from "../database/postgresSQL.js";
export default  async function deleter(req,res){
    const {user_id} = req.finder.rows[0]
    console.log(req.finder.rows[0])
    const id = req.params.id
    try{
        const urls = await DB.query(`SELECT * FROM urls WHERE urls.id = $1`,[id])
        if(urls.rowCount === 0){
            return res.status(404).send("this urls dont exist")
        }
        if(user_id.toString() !== urls.rows[0].user_id.toString()){
            return res.status(401).send("you aren't autorizated to delete this url")
        }
        await DB.query(`DELETE FROM urls WHERE urls.id = $1`,[id])
        return res.sendStatus(204)
    }catch(err){return res.status(500).send(err.message)}
    
}