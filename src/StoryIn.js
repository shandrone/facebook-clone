import { Avatar } from '@material-ui/core'
import React from 'react'
import './StoryIn.css'

function StoryIn({image, profileSrc, title}) {
    return (
        <div style = {{backgroundImage: `url(${image})`}} className = "storyIn">
            <Avatar className="story_avatar" src = {profileSrc} />
            <h4> {title} </h4>
            
        </div>
    )
}

export default StoryIn
