const db = require('../../data/dbConfig')
const School = require('./schools-model')

test('it is the correct environment for the tests', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

describe('School db access functions', () => {
  let schools
  beforeEach(async () => {
      schools = await School.get()
  })

  describe('School.get', () => {
    it('resolves to all schools in the schools table', async () => {
      expect(schools.length).toBe(3)
    })

    it('resolves to the correct school shapes', async () => {
      expect(schools[0]).toMatchObject({ school_id: 1, name: 'Freja' })
      expect(schools[1]).toMatchObject({ school_id: 2, name: 'Blue' })
      expect(schools[2]).toMatchObject({ school_id: 3, name: 'Anansi' })
    })
  })

  describe('School.getById', () => {
    let school
    let num = 0
    beforeEach(async () => {
        school = await School.getById(++num)
    })

    it('resolves the school with the given id', async () => {
      expect(school).toMatchObject({ school_id: 1, name: 'Freja' })
    })

    it('resolves to the correct school shapes', async () => {
      expect(school).toMatchObject({ school_id: 2, name: 'Blue' })
    })
  })

//   describe('School.insert', () => {
//     it('resolves to all schools in the schools table', async () => {
//       expect(school).toMatchObject({ school_id: 1, name: 'Freja' })
//     })

//     it('resolves to the correct school shapes', async () => {
//       expect(schools[0]).toMatchObject({ school_id: 1, name: 'Freja' })
//       expect(schools[1]).toMatchObject({ school_id: 2, name: 'Blue' })
//       expect(schools[2]).toMatchObject({ school_id: 3, name: 'Anansi' })
//     })
//   })
})
