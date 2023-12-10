import DB from '../database/postgresSQL.js'

export default async function myProfile (req, res) {
  const { userId } = req.finder.rows[0]
  try {
    const userData = await DB.query(
            `SELECT 
            "Users".id as userid, "Users".name,
            urls.id,urls.original_url as url,
            urls.shorter_url as "shortUrl",
            urls.viens as "visitCount"
            FROM "Users"
            JOIN urls
            ON "Users".id = urls.user_id
            WHERE "Users".id = $1`, [userId])
    const userDataFormated = {
      id: userData.rows[0].userid,
      name: userData.rows[0].name,
      visitCount: userData.rows.reduce((total, valor) => { return total = total + valor.visitCount }, 0),
      shortenedUrls: userData.rows.map((value) => { return { id: value.id, shortUrl: value.shortUrl, visitCount: value.visitCount, url: value.url } })
    }
    return res.status(200).send(userDataFormated)
  } catch (err) { return res.status(500).send(err.message) }
}
