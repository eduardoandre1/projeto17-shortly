export default function inputValidate (schema) {
  return (req, res, next) => {
    const inputTest = schema.validate(req.body, { abortEarly: false })
    if (inputTest.error) {
      return res.status(422).send(inputTest.error)
    }
    next()
  }
}
