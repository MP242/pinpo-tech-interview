const router = require('express').Router()
const Post = require('../model/post')

router.route('/')
	.get(async (_, response) => {
		try {
			const posts = await Post.getPosts()
			response.json(posts)
		} catch (error) {
			response.status(500).json({ error: error.toString() })
		}
	})
	.post(async (request, response) => {
		try {
			const params = request.body
			const post = await Post.newPost(params)
			response.status(201).json(post)
		} catch (error) {
			response.status(500).json({ error: error.toString() })
		}
	})

router.route("/:id")
	.get(async (request, response) => {
		const { id } = request.params
		try {
			const post = await Post.getPost(id)
			response.json(post)
		} catch (error) {
			response.status(500).json({ error: error.toString() })
		}
	})
	.put(async (request, response) => {
		const { id } = request.params
		const params = request.body
		try {
			const post = await Post.updatePost(id, params)
			return response.status(204).json(post)
		} catch (error) {
			response.status(500).json({ error: error.toString() })
		}
	})

router.route("/home/:number")
	.get(async (request, response) => {
		try {
			const { number } = request.params
			const posts = await Post.getPostsHome(number)
			response.json(posts)
		} catch (error) {
			response.status(500).json({ error: error.toString() })
		}
	})

module.exports = router
