import bcrypt from 'bcrypt'
import DB from '../database/postgresSQL.js'
import { v4 as uuid } from 'uuid'

async function signIn (req, res) {
  const { email, password } = req.body
  try {
    const select = 'SELECT * FROM "Users" WHERE email = $1'
    const user = await DB.query(select, [email])
    if (user.rowCount === 0) {
      return res.status(401).send('email dont finded in server')
    }
    const passwordValidate = bcrypt.compareSync(password, user.rows[0].password)
    if (passwordValidate === false) {
      return res.status(401).send('wrong passwords')
    }
    const token = uuid()
    const date = new Date()
    await DB.query('INSERT INTO tokens (user_id,token,"createdAt") VALUES ($1,$2,$3)', [user.rows[0].id, token, date])
    return res.status(200).send({ token })
  } catch (erro) { return res.status(500).send(erro.message) }
}
export default signIn
