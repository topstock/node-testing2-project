const { getById } = require('../schools/schools-model')

function logger (req, res, next) {
  console.log(`[${new Date().toString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`)
  next()
}

async function validateSchoolId (req, res, next) {
  const id = req.params.id
  const idsSchool = await getById(id)
  if (idsSchool) {
    req.school = idsSchool
    next()
  } else {
    res.status(404).json({ message: 'school not found' })
  }
}

function validateSchool (req, res, next) {
  // // DO YOUR MAGIC
  // - `validateSchool` validates the `body` on a request to create or update a school
  // - if the request `body` lacks the required `name` field, respond with status `400` and `{ message: "missing required name field" }`
  console.log(req.body.name)
  if (req.body.name) {
    next()
  } else {
    res.status(400).json({ message: 'missing required name field' })
  }
}

function validateSubject (req, res, next) {
  // // DO YOUR MAGIC
  // - `validateSubject` validates the `body` on a request to create a new subject
  // - if the request `body` lacks the required `text` field, respond with status `400` and `{ message: "missing required text field" }`
  if (req.body.name) {
    next()
  } else {
    res.status(400).json({ message: 'missing required name field' })
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateSchoolId,
  validateSchool,
  validateSubject
}
