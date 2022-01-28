const dbConfig = require('../../data/dbConfig')
const School = require('./schools-model')

test('it is the correct environment for the tests', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

beforeAll(async () => {
  await dbConfig.migrate.rollback()
  await dbConfig.migrate.migrate()
})

describe('School db access functions', () => {

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


