const { ImageKit }=require("@imagekit/nodejs")

const client= new ImageKit({
    privateKey:"private_2LYutuWFU9nv5IX5DU81A1qn2xQ="
})

async function uploadFile(buffer) {
    const uploadFile= await client.files.upload({
        file:buffer.toString("base64"),
        fileName:"post.jpg"
    })

    return uploadFile
    
}

module.exports=uploadFile