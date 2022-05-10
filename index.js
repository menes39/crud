const express = require("express")
const mongoose = require("mongoose")
const Post = require("./Post")
const router = require("./router")


app = express()

app.use(express.json())

PORT = process.env.PORT || 3000

// app.get('/', (req,res) => {
//     console.log(req.query.test);

//     res.status(200).json("running")
// })

// app.post('/', async (req,res) => {
//     try {
//         //Destruting
//         const {author, title, content, picture} = req.body;

//         // const author = req.body.author; //aynı şeyy
//         const post = await Post.create({author, title, content, picture}) //create fonksiyonu geriye post ettiği şeyi dönerr
//         res.json(post)

//     } catch (error) {
        
//     }
// })

// app.use('/api', router)  //BUNU ÖIKARINCA ÇALIŞMIYO NODEMON????

const DB_URL = 'mongodb+srv://menes39:Menes.39@cluster0.r9itr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const StartApp = async () => {
    try {
        mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            UseNewUrlParser: true
        })
        app.listen(PORT, () => console.log("server running...."))
    } catch (error) {
        console.log(error)
        
    }
}


StartApp()