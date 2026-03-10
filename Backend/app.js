const express = require("express")
const cors = require("cors")
const postModel = require("./src/api/post/postModel")
const multer = require("multer")
const uploadFile = require("./src/utils/helper")

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })


app.post("/post/create", upload.single("image"), async (req, res) => {
    const uploadPost = await uploadFile(req.file.buffer)
    const post = await postModel.create({
        image: uploadPost.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
})

app.get("/post/all", async (req, res) => {
    const post = await postModel.find()
    res.status(200).json({
        message: "Post data fetched",
        post
    })


    app.delete("/posts/:id", async (req, res) => {
        const id = req.params.id
        const deletePost = await postModel.deleteOne({ _id: id })

        res.status(200).json({
            message: "Post deleted successfully",
            deletePost
        })
    })


})
module.exports = app