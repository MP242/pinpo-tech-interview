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
	try {
		return Post.find().sort({ createdAt: -1 }).limit(20)
	} catch(error) {
		return response.status(500).json({ error: error.toString() })
	}
}
function getPostsHome(number) {
	try {
		return Post.find().sort({ createdAt: -1 }).limit(number)
	} catch(error) {
		return response.status(500).json({ error: error.toString() })
	}
}

function getPost(id) {
	try {
		return Post.findOne({'_id': id })
	} catch(error) {
		return response.status(500).json({ error: error.toString() })
	}
}

async function updatePost(id, params) {
	const { title, content, author } = params
	if (!title || !content || !author) {
		return response.status(422).json({ error: 'Unprocessable Entity'})		
	}
	try {
		const post = await getPost(id)
		post.set({
			title,
			content,
			author,
		})
		return await post.save()
	} catch(error) {
		return response.status(500).json({ error: error.toString() })
	}
}

async function newPost(params) {
	const post = new Post()
	const { title, content, author } = params
	if (!title || !content || !author) {
		return response.status(422).json({ error: 'Unprocessable Entity'})	
	}
	try{
		post.set({
			title,
			content,
			author,
			isArchived: false,
		})
		return await post.save()
	} catch(error) {
		return response.status(500).json({ error: error.toString() })
	}
}

module.exports = Post
module.exports.getPosts = getPosts
module.exports.getPost = getPost
module.exports.updatePost = updatePost
module.exports.newPost = newPost
module.exports.getPostsHome = getPostsHome
