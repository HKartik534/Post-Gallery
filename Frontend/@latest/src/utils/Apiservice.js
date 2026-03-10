import axios from "axios"

class Apiservice{
    CreatePost(data){
        return axios.post("http://localhost:3000/post/create",data)
    }
    FeedData(){
        return axios.get("http://localhost:3000/post/all")
    }

}

export default new Apiservice