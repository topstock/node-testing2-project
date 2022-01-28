exports.up = function (knex) {
  return knex.schema
    .createTable('subjects', function (subjects) {
      subjects.increments('subject_id')
      subjects
        .string('name')
        .notNullable()
        .unique()
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('subjects');
}
