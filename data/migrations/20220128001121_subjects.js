exports.up = function (knex) {
  return knex.schema
    .createTable('subjects', function (subjects) {
      subjects.increments('subject_id')
      subjects
        .string('name')
        .notNullable()
        .unique()

      subjects
        .integer('school_id')
        .unsigned()
        .notNullable()
        .references('school_id')
        .inTable('schools')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('subjects')
}
