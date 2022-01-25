import React, { useState, useEffect } from 'react';
import MediaFeed from './MediaFeed';


export default function AllPosts() {

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result);
            setData(result.posts);
        })
     },[])
    return( 
    <div style={{columnCount:"3", columnGap:"0px"}}>
        {
            data.map(item => {
               
                return (
                  <div key={item._id}>
                  <MediaFeed
                  id={item._id}
                  likes={item.likes.length}
                  image={item.photo}
                  body = {item.body}
                  postedBy = {item.postedBy.name}
                  city= {item.city}
                  />
                  </div>)
            }
            )
        }
    </div>
)
}
