const db = require('../../data/dbConfig')

module.exports = {
  get,
  getById,
  getSchoolSubjects,
  insert,
  update,
  remove
}

function get () {
  return db('schools')
}

function getById (id) {
  return db('schools')
    .where({ school_id: id })
    .first()
}

function getSchoolSubjects (schoolId) {
  return db('subjects as su')
    .join('schools as sch', 'sch.id', 'su.school_id')
    .select('su.id', 'su.name', 'sch.name as subjectedBy')
    .where('su.school_id', schoolId)
}

function insert (school) {
  return db('schools')
    .insert(school)
    .then(ids => {
      return getById(ids[0])
    })
}

function update (id, changes) {
  return db('schools')
    .where({ id })
    .update(changes)
    .then(rows => {
      return getById(id)
    })
}

function remove (id) {
  return db('schools')
    .where('id', id)
    .del()
}
