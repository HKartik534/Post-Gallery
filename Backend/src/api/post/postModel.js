const mongoose =require("mongoose")

const postSchema=new mongoose.Schema({
    image:{type:String,default:""},
    caption:{type:String,default:""}
},{timestamps:true})

const postModel= new mongoose.model("posts",postSchema)

module.exports=postModel