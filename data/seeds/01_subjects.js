
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('subjects').del()
    .then(function () {
      // Inserts seed entries
      return knex('subjects').insert([
        { subject_id: 1, name: 'Numerology' },
        { subject_id: 2, name: 'Theosophy' },
        { subject_id: 3, name: 'Abstraction' }
      ])
    })
}
