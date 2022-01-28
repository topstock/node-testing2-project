
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
        { school_id: 1, name: 'Freja', subject_id: 3 },
        { school_id: 2, name: 'Blue', subject_id: 1 },
        { school_id: 3, name: 'Anansi', subject_id: 2 }
      ])
    })
}
