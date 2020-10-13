import { Avatar } from '@material-ui/core'
import React , {useState} from 'react'
import './Post.css'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import { useStateValue } from './StateProvider';
import db from "./Firebase"
import firebase from "firebase"


function Post() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    //submiting written texts from the "share your thoughts" input as a post
    const handleSubmit = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        setInput("");
        setImageUrl("");
    }
    //className="post_input" placeholder = {`What's on your mind, ${user.displayName} ?`}/>
    return (
        <div className = "post">
            <div className="post_top">
                <Avatar src= {user.photoURL} />
                <form>
                    <input 
                    value = {input}
                    onChange= {(e) => setInput(e.target.value)}
                    className="post_input" placeholder = {`What's on your mind?`}/>

                    <input 
                    value = {imageUrl}
                    onChange = {(e) => setImageUrl(e.target.value)}
                    placeholder = "image source url" />

                    <button onClick={handleSubmit} type= "submit" >submit</button>


                </form>
            </div>
            <div className="post_bottom">
                <div className="post_option">
                    <VideocamOutlinedIcon style = {{color:"gray"}} />
                    <h3>Live</h3>
                </div>

                <div className="post_option">
                    <PhotoLibraryOutlinedIcon style = {{color:"gray"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="post_option">
                    <SentimentSatisfiedOutlinedIcon style = {{color:"gray"}} />
                    <h3>Feeling</h3>
                </div>

            </div>
        </div>
    )
}

export default Post
