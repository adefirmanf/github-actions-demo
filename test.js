const request = require('supertest')
const assert = require('assert')
const app = require('.')

describe("Application test", () => {
  it("Should return 200", async () => {
    await request(app).get("/").expect(200)
  })
})