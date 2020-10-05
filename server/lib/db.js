const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// Mongodb connection
mongoose.connect(process.env.MONGODB_URI).then((result) => {
	const dbName = result.connections[0].name
	console.log(`Connected to database ${dbName}`)
})

require("../model/post")
