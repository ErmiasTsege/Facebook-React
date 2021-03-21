import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import  './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import {ExpandMoreOutlined} from '@material-ui/icons';
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
function Post({profilePic,image,username,timestamp,message}) {
  const [count,setCount]=useState(0)
  function increment(){
 
    setCount((count)=>count+1);

  }

    return (
        <div className="post">
         <div className="post_top">
             <Avatar src={profilePic} className="post_avatar"/>
             <div className="post_topInfo">
                 <h3>
                     {username}
                 </h3>
                 {/* <p>{new Date {timestamp?.toDate()).toUTCString()}</p> */}
                 <p>{new Date (timestamp?.toDate()).toUTCString()}</p>
             </div>
         </div>
         <div className="post_bottom">
             {message}
         </div>
         <div className="post_image">
              <img src={image} alt=""/>
         </div>

         <div className="post_options">
         <div className="post_option">
              <ThumbUpIcon/>  
            <p onClick={increment}>Like {count}</p> </div>

            <div className="post_option">
              <ChatBubbleOutlineIcon/>  
            <p>Comment</p> </div>
            <div className="post_option">
              <NearMeIcon/>  
            <p>Share</p></div>
            <div className="post_option">
              <AccountCircleIcon/>  
              <ExpandMoreOutlined/>           
         </div>
         </div>

         </div>
       
     
    )
}

export default Post

