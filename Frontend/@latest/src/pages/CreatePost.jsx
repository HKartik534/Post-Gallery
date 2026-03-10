import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Apiservice from "../utils/Apiservice"

export default function CreatePost() {

    const[image,setImage]=useState(null)
    const [caption,setCaption]=useState([])
    const nav=useNavigate()
    const handleform=(e)=>{
        e.preventDefault()
        const formdata=new FormData()
        formdata.append("image",image)
        formdata.append("caption",caption)
        Apiservice.CreatePost(formdata)
        .then((res)=>{
            console.log(res);
            nav("/feed")

        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

    return (
        <>
            <section className='create-post-section' >
                <h1>Create post</h1>

                <form onSubmit={handleform}>

                    <input type="file" name="image" accept="image/*" onChange={(e)=>{
                        setImage(e.target.files[0])
                    }}/>
                    <input type="text" name='caption' placeholder='Enter caption' required value={caption} onChange={(e)=>{
                        setCaption(e.target.value)
                    }}/>
                    <button type='submit' >Submit</button>

                </form>

            </section>
        </>
    )
}