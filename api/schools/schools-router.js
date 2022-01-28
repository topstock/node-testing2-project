const express = require('express')
const router = express.Router()

// You will need `schools-model.js` and `Subjects-model.js` both
// The middleware functions also need to be required
const Schools = require('./schools-model')
const Subjects = require('../subjects/subjects-model')

const {
  validateSchoolId,
  validateSchool,
  validateSubject
} = require('../middleware/middleware')

router.get('/', async (req, res) => {
  // RETURN AN ARRAY WITH ALL THE SchoolS
  const allSchools = await Schools.get()
  res.status(200).json(allSchools)
})

router.get('/:id', validateSchoolId, (req, res) => {
  // RETURN THE School OBJECT
  // this needs a middleware to verify school id
  res.status(200).json(req.school)
})

router.post('/', validateSchool, async (req, res) => {
  // RETURN THE NEWLY CREATED School OBJECT
  // this needs a middleware to check that the request body is valid
  const newSchool = await Schools.insert(req.body)
  res.status(200).json(newSchool)
})

router.put('/:id', validateSchoolId, validateSchool, async (req, res) => {
  // RETURN THE FRESHLY UPDATED School OBJECT
  // this needs a middleware to verify school id
  // and another middleware to check that the request body is valid
  const updatedSchool = await Schools.update(req.params.id, req.body)
  res.status(200).json(updatedSchool)
})

router.delete('/:id', validateSchoolId, async (req, res) => {
  // RETURN THE FRESHLY DELETED School OBJECT
  // this needs a middleware to verify school id
  const deletedSchool = await Schools.getById(req.params.id)
  await Schools.remove(req.params.id)
  res.status(200).json(deletedSchool)
})

router.get('/:id/subjects', validateSchoolId, async (req, res) => {
  // RETURN THE ARRAY OF School SubjectS
  // this needs a middleware to verify school id
  const schoolSubjects = await Schools.getSchoolSubjects(req.params.id)
  res.status(200).json(schoolSubjects)
})

router.post('/:id/subjects', validateSchoolId, validateSubject, async (req, res) => {
  const newSubject = await Subjects.insert({ ...req.body, school_id: req.params.id })
  res.status(200).json(newSubject)
})

module.exports = router
