import React,{useState,useEffect} from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import Post from './Post'
import MessageSender from'./MessageSender'
import db from "./firebase"

function Feed() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot=>(setPosts(snapshot.docs.map((doc)=>(
           { id:doc.id,data:doc.data()
        })))

    ))},[])
    return (
        <div className="feed">
              <StoryReel/>
          <MessageSender/>
               {posts.map((post)=>
               <Post 
               key={post.id}
               profilePic={post.data.profilePic}
               message={post.data.message}
               timestamp={post.data.timestamp}
               username={post.data.username}
               image={post.data.image}/>
               
               )}

           {/* <Post profilePic="https://yageru.com/images/artists/a22.jpg"
                 message="wow this works"
                 timestamp="This is the time stamp"
                 username="ERmi"
                 image="https://i.pinimg.com/originals/e5/5b/e1/e55be12a243e16ac8419650d891b8ef5.jpg"
           
           />
           <Post profilePic="https://i.eurosport.com/2020/02/13/2774438-57310770-2560-1440.jpg"
                 message="wow this works"
                 timestamp="This is the time stamp"
                 username="ERmi"
                 image="https://celebritypets.net/wp-content/uploads/2017/11/Abel-tesfaye-the-weeknd.jpg"/>
           <Post/> */}
        </div>
    )
}

export default Feed

