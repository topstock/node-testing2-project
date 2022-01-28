exports.up = function (knex) {
  return knex.schema
    .createTable('schools', function (schools) {
      schools.increments('school_id')
      schools.text('name').notNullable()
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('schools')
}
