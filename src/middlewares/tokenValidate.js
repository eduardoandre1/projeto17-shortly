import DB from '../database/postgresSQL.js'

export default async function tokenValidade (req, res, next) {
  const { authorization } = req.headers
  const select = 'SELECT * FROM "tokens" WHERE "token" = $1'
  try {
    const finder = await DB.query(select, [authorization.replace('Bearer', '').trim()])
    if (finder.rowCount === 0) {
      return res.sendStatus(401)
    }
    req.finder = finder
  } catch (err) { return res.status(500).send(err.message) }
  next()
}
