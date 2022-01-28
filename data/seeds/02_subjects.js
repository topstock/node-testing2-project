
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('subjects').del()
    .then(function () {
      // Inserts seed entries
      return knex('subjects').insert([
        { subject_id: 1, name: 'Numerology', school_id: 2 },
        { subject_id: 2, name: 'Theosophy', school_id: 3 },
        { subject_id: 3, name: 'Abstraction', school_id: 1 }
      ])
    })
}
