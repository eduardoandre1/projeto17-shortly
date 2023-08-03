import bcrypt from "bcrypt";
import DB from "../database/postgresSQL.js";
async function Sign_up(req,res){
    const {name , email , password , confirmPassword} = req.body
    const crypt_password = bcrypt.hashSync(password,10)
    try{
        
        const inserir = `INSERT INTO "Users" (name,email,password) VALUES ($1,$2,$3)`
        await DB.query(inserir,[name,email,crypt_password])
        return res.sendStatus(201)
    }catch(err){return res.status(500).send(err.message)}
}
export default Sign_up
