async function Sign_up(req,res){
    const {name , email , password , confirmPassword} = req.body
    try{
        
        const inserir = `INSERT INTO "Users" (name,email,password,"confirmPassword") VALUES ($1,$2,$3,$4)`
        const g = await DB.query(inserir,[name,email,password,confirmPassword])
        return res.sendStatus(201)
    }catch(err){return res.status(500).send(err.message)}
}
export default Create_game
