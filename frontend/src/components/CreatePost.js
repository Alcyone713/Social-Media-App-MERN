import React, { useEffect, useState } from 'react';
import './createpost.css';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  
    const history = useNavigate();
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const [location, setLocation]= useState("");

    useEffect(()=>{
        if(url){
            fetch("/createpost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+ localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    body,
                    pic:url,
                    city:location,
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        console.log("error");
                    }
                    else {
                     history('/mainpage');
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    },[url]);

    const PostDetails = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","socialmediaapp")
        data.append("cloud_name","abcdefu")
        fetch("https://api.cloudinary.com/v1_1/abcdefu/image/upload",{
            method:"post",
            body:data,
        })
        .then(res=>res.json())
        .then(data=>{
           console.log(data);
           setUrl(data.url);
        })
        .catch(err=>{
            console.log(err);
        })
       
        
     
    }
  
    return <div>
        <form className='form1'>
            <h1>Create Post</h1>
            <div class="formcontainer">
                <hr />
                <div class="containerY">
                    <label><strong>Description</strong></label>
                    <input type="text" value={body} onChange={(event)=> setBody(event.target.value)}  placeholder="Add description" className='descriptionY'/>
                    <label><strong>Location</strong></label>
                    <input type="text" value={location} onChange={(event)=> setLocation(event.target.value)}  placeholder="Add a location" className='descriptionY'/>
                    <label style={{marginRight: '10px'}}><strong>Add image</strong></label>
                    <input type="file" onChange={(event)=> setImage(event.target.files[0])} className='upload' required />
                </div>
                <button className='btncreate' type="submit" onClick={()=>PostDetails()}>Create Post</button>
                
            </div>
        </form>
    </div>;
}
