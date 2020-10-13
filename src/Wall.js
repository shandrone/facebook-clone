import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Wall.css"
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Wall({profilePic, image, username, timestamp, message}) {
    return (
        <div className="wall">

            <div className="wall_top"> 
            <Avatar src = {profilePic}
            className="wall_avatar" />
            <div className="wall_topInfo">
                <h3> {username} </h3>
                <p> {new Date(timestamp?.toDate()).toUTCString()} </p>
                
            </div>
            </div>

            <div className="wall_bottom">
                <p> {message} </p>
            </div>

            <div className="wall_image"> 
            <img src = {image} alt ="" />
            </div>

            <div className="wall_options">
                <div className="wall_option">
                    <FavoriteBorderOutlinedIcon />
                    <p>Like</p>
                </div>
                <div className="wall_option">
                    <CommentOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="wall_option">
                    <ShareOutlinedIcon />
                    <p>Share</p>
                </div>
                <div className="wall_option">
                    <AccountCircleOutlinedIcon />                    
                </div>
            </div>
                        
        </div>
    )
}

export default Wall
