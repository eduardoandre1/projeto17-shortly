import bcrypt from "bcrypt";
import DB from "../database/postgresSQL.js";
async function SignUp(req,res){
    const {name , email , password } = req.body
    const cryptPassword = bcrypt.hashSync(password,10)
    try{
        
        const inserir = `INSERT INTO "Users" (name,email,password) VALUES ($1,$2,$3)`
        await DB.query(inserir,[name,email,cryptPassword])
        return res.sendStatus(201)
    }catch(err){return res.status(500).send(err.message)}
}
export default SignUp
