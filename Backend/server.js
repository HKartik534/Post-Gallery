const app=require("./app")
const connectDb=require("./src/db/db")

connectDb()

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
    
})