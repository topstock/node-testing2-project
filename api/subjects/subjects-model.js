const db = require('../../data/dbConfig')

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
}

function get () {
  return db('subjects')
}

function getById (id) {
  return db('subjects')
    .where({ id })
    .first()
}

function insert (subject) {
  return db('subjects')
    .insert(subject)
    .then(ids => {
      return getById(ids[0])
    })
}

function update (id, changes) {
  return db('subjects')
    .where({ id })
    .update(changes)
}

function remove (id) {
  return db('subjects')
    .where('id', id)
    .del()
}
