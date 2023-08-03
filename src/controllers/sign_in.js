import bcrypt from "bcrypt";
import DB from "../database/postgresSQL.js";
async function Sign_up(req,res){
    const {email , password } = req.body
    try{
        const select = `SELECT * FROM "Users" WHERE email = $1`
        const user = await DB.query(select,[email])
        const password_validate = bcrypt.compareSync(password,user.rows[0].password)
        if(password_validate === false){
            res.status(401).send('dont works')
        } 
    }catch(erro){return res.status(500).send(erro.messagem)}
}