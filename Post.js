const mongoose = require("mongoose")

const Post = mongoose.Schema({
    author: {type: String, required: true}, // requied true boş geçmemesini 
    title: {type: String, required: true}, // requied true boş geçmemesini 
    content: {type: String, required: true}, // requied true boş geçmemesini 
    picture: {type: String} 
})
module.exports = mongoose.model('Post', Post);
