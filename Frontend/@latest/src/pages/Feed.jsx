import axios from "axios"
import { useEffect, useState } from "react"
import Apiservice from "../utils/Apiservice"

export default function Feed() {
    const [postdata,setPostdata]=useState([])
    useEffect(()=>{
        Apiservice.FeedData()
        .then((res)=>{
            console.log(res);
            setPostdata(res.data.post)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    },[])
    return (
        <>
            <section className='feed-section' >

                {
                    postdata.length > 0 ? (
                        postdata.map((el) => (
                            <div key={el._id} className='post-card' >
                                <img src={el.image} alt={el.caption} />
                                <p>{el.caption}</p>
                            </div>
                        ))
                    ) : (
                        <h1>No posts available</h1>
                    )
                }

            </section>
        </>
    )
}