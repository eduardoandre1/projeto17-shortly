import DB from "../database/postgresSQL.js"

export default async function tokenvalidade(req,res,next){
        const {authorization} = req.headers
        const select = `SELECT * FROM "tokens" WHERE "token" = $1`
        try{
            const finder = await DB.query(select,[authorization])
            if(finder.rowCount === 0){
            return res.sendStatus(401)}
        }
        catch(err){return res.status(500).send(err.message)}
    next()
}
