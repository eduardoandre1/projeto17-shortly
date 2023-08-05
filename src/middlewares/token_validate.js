import DB from "../database/postgresSQL.js"

export default async function tokenvalidade(req,res,next){
        const token = req.headers['authorization']
        console.log(token)
        const select = `SELECT * FROM "tokens" WHERE "token" = $1`
        try{
            const finder = await DB.query(select,[token])
            if(finder.rowCount === 0){
            return res.sendStatus(401)}
        }
        catch(err){return res.status(500).send(err.message)}
    next()
}
