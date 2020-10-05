const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	author: { type: String, required: true },
	isArchived: { type: Boolean, default: false, required: true },
	createdAt: { type: Date, default: Date.now, required: true }
})

const Post = mongoose.model('Post', Schema)

function getPosts() {
	return Post.find()
}

function getPost(id) {
	return Post.findOne({'_id': id })
}

async function updatePost(id, params) {
	const post = await getPost(id)
	const { title, content, author } = params
	post.set({
		title,
		content,
		author,
	})
	return await post.save()
}

async function newPost(params) {
	const post = new Post()
	const { title, content, author } = params
	post.set({
		title,
		content,
		author,
		isArchived: false,
	})
	return await post.save()
}

module.exports = Post
module.exports.getPosts = getPosts
module.exports.getPost = getPost
module.exports.updatePost = updatePost
module.exports.newPost = newPost
