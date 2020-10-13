import React, { useEffect, useState } from 'react'
import "./Feed.css"
import db from './Firebase'
import Post from './Post'
import Story from './Story'
import Wall from './Wall'

function Feed() {
    const [posts, setPosts] = useState([]);
    //load feed
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({id:doc.id, data: doc.data() }))) //snapshot from DB. find doc, map it to post
        ))
        
        
    }, [])


    return (
        <div className="feed">
            <Story />            
            <Post />

            {posts.map((post) => (
                <Wall 
                key = {post.id}
                profilePic = {post.data.profilePic}
                message = {post.data.message}
                timestamp = {post.data.timestamp}
                username = {post.data.username}
                image = {post.data.image}
                />

            ))

            }
        </div>
    )
}

export default Feed
