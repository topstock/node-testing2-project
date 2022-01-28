exports.up = function (knex) {
  return knex.schema
    .createTable('schools', function (schools) {
      schools.increments('school_id')
      schools.text('name').notNullable()

      schools
        .integer('subject_id')
        .unsigned()
        .notNullable()
        .references('subject_id')
        .inTable('subjects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('schools')
}
