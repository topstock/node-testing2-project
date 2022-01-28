
const request = require('supertest')
const server = require('../server')
const db = require('../../data/dbConfig')

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

describe('GET /api/schools', () => {
  test('returns a status 200 OK', async () => {
    const res = await request(server)
      .get('/api/schools')
    expect(res.status).toBe(200)
    expect(res.body.length).toBe(3)
  })
})

describe('POST /api/schools', () => {
  test('returns a status 201 Created', async () => {
    const res = await request(server)
      .post('/api/schools')
      .send({ name: 'Red' })
    expect(res.status).toBe(201)
  })

  test('returns the new school', async () => {
    const res = await request(server)
      .post('/api/schools')
      .send({ name: 'Blue' })
    expect(res.body.name).toBe('Blue')
    expect(res.body.school_id).toBe(5)
  })
})
