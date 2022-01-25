import React, {useState} from 'react';
import './mediaFeed.css';

export default function MediaFeed(props) {

    const [data,setData] = useState([]);
   
    const [clase, setClass] = useState("far fa-heart");
    const [style, setStyle] = useState("likeA");
    const likePost = (id)=>{
        fetch('/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id,
            })
        }).then(res=>res.json())
        .then(result=>{
           //console.log(result)
           const newData = data.map(item=>{
            if(item._id==result._id){
                return result;
            }else{
                return item;
            }
        })
        setData(newData)
        }).catch(err=>{
            console.log(err)
        })
  }
   
  const changeStyle = () =>{
      setClass("fas fa-heart");
      setStyle("likered");
  }

    return <div>
        <div className="cardA">
            <div className="profileA">
                <img src="https://images.unsplash.com/photo-1642923051153-07d4c98fe203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" id="profilePicA" />
                <div>
                    <p id="nameA">{props.postedBy}</p>
                    <h6 id="cityA">{props.city}</h6>
                </div>
            </div>
            <img id="contentA" src={props.image} alt="Avatar" style={{ width: "100%" }} />
            <div className="buttonsA" style={{ fontSize: "17px" }}>

                <i id={style} className={clase} style={{cursor:"pointer"}} onClick={()=>{likePost(props.id) ; changeStyle();}}></i>
                <i id='commentA' className="far fa-comment"></i>
                <i id='shareA' className="far fa-paper-plane"></i>
                <i id="bookmarkA" className="far fa-bookmark"></i>
            </div>
            <div className="containerA">
                <h5 id="likedByA">{props.likes} likes</h5>
                <i id="quoteA" className="fas fa-quote-left" style={{ float: "left", fontSize: "7px" }}></i>
                <p id="descriptionA">{props.body} <strong>...(more)</strong></p>
            </div>
        </div>
    </div>
}
