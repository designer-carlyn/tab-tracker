const mongoose = require('mongoose');

// Post Schema
const postSchema = new mongoose.Schema({
    title: String,
    category: String,
    content: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema);