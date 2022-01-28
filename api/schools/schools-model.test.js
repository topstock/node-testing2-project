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
      const schools = await School.get()
      expect(schools.length).toBe(3)
    })

    it('resolves to all schools in the schools table', async () => {
      const schools = await School.get()
      expect(schools.length).toBe(3)
    })
  })
})
