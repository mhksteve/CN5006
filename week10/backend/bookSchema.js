const mongoose = require ('mongoose')
const bookSchema = new mongoose.Schema({

    booktitle: {type:String, required: true},
    pubYear: Number,
    author: String,
    topic: String,
    format: String
})

module.exports = mongoose.model('bookModel', bookSchema )