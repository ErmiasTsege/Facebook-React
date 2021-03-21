import React,{useState} from 'react'
import "./MessageSender.css"
import db from './firebase'
import firebase from 'firebase'
import {Avatar} from '@material-ui/core'
import VideoCamIcon from "@material-ui/icons/Videocam"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import {useStateValue} from './StateProvider'

import { ImageAspectRatioOutlined } from '@material-ui/icons'
function MessageSender() {
    const [{user},dispatch]=useStateValue();
    const [input, setInput]=useState("")
    const [imgUrl,setImgUrl]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();

         db.collection('posts').add({
             message:input,
             timestamp:firebase.firestore.FieldValue.serverTimestamp(),
             profilePic:user.photoURL,
             username:user.displayName,
             image:imgUrl,
        
         })
        setInput("");
        setImgUrl("");
    }
    return (
        <div clasName="messageSender">
            <div className="mesageSender_top">
                <Avatar src={user.photoURL}/>
                 <form>
                     <input value ={input} onChange={(e)=>setInput(e.target.value)} className= "messageSender_input" type="text" placeholder={`What's on your mind ?${user.displayName}`}/>
                   <input value={imgUrl} onChange={(e)=>setImgUrl(e.target.value)} type="text" placeholder="image URL (optional)"/>
                   <button onClick={handleSubmit} type="submit">
                       Hidden submit
                   </button>
                </form>
            </div>
            <div className="messageSender_bottom">
               <div className="messageSender_option">
                   <VideoCamIcon style={{color:"red"}} />
                   <h3>Live Video</h3>
               </div>
               
               <div className="messageSender_option">
                   <PhotoLibraryIcon style={{ color:"green"}} />
                   <h3>Photo/Video</h3>
               </div>
               <div className="messageSender_option">
                   <InsertEmoticonIcon style={{ color: "orange"}} />
                   <h3>Feeling/Activity</h3>
               </div>
            </div>

        </div>
    )
}

export default MessageSender
