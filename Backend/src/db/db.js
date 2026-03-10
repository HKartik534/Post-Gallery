const mongoose=require("mongoose")

async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017/NodeJsTutorialProject1")
    console.log("Database connected");
    
    
}

module.exports=connectDb