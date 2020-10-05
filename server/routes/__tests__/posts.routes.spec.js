jest.mock("../../model/post", () => ({
	updatePost: jest.fn()
}))

const request = require("supertest")
const express = require('express')
const app = express()

const posts = require("../posts.routes")
app.use('/api/posts', posts)

describe("Posts Router", () => {
	describe("PUT api/posts/:id", () => {
		it("should throw an error if body passed is empty", async () => {
			expect.assertions(1)
			const response = await request(app).put("/api/posts/myId")
			expect(response.status).toEqual(400)
		})
	})
})
