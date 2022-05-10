const {Router} = require("express")



const router = Router()

router.post('/posts', async (req,res) => {
    try {
        //Destruting
        const {author, title, content, picture} = req.body;

        // const author = req.body.author; //aynı şeyy
        const post = await Post.create({author, title, content, picture}) //create fonksiyonu geriye post ettiği şeyi dönerr
        res.json(post)

    } catch (error) {
        
    }
})

const postController = new PostController()
router.post('/posts', postController.create)

module.exports = router