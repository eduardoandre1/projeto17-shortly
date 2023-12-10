import { nanoid } from 'nanoid'
import DB from '../database/postgresSQL.js'

export default async function shorten (req, res) {
  const token = req.headers.authorization
  const { url } = req.body
  try {
    const shortUrl = nanoid(10)
    const getToken = await DB.query('SELECT * FROM "tokens" WHERE token = $1', [token.replace('Bearer', '').trim()])
    const date = new Date()
    const id = getToken.rows[0].user_id
    await DB.query('INSERT INTO urls (user_id,original_url,shorter_url,"createdAt") VALUES ($1,$2,$3,$4)', [id, url, shortUrl, date])
    const screen = await DB.query('SELECT urls.id FROM urls WHERE shorter_url = $1 ', [shortUrl])
    return res.status(201).send({ id: screen.rows[0].id, shortUrl })
  } catch (err) { return res.status(500).send(err.message) }
}
