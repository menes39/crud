const Post = require("./Post")
const PostController = require("./PostController")

class PostServise {

    async create(post){
    const createdPost = await Post.create(post)
    return createdPost;

    }
    async getAll(){

    }
    async getOne(){

    }
    async update(){

    }
    async delete(){

    }

}

module.exports = PostServise