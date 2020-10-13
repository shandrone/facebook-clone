import React from 'react'
import './Story.css'
import StoryIn from './StoryIn'

function Story() {
    return (
        <div className ="story">
            <StoryIn 
            image = "https://image.shutterstock.com/z/stock-photo-image-of-blur-people-in-exhibition-at-the-museum-for-background-usage-303014555.jpg"
            profileSrc = "https://image.shutterstock.com/image-vector/cheerful-chubby-man-260nw-125706848.jpg"
            title = "My Name" />
            <StoryIn 
            image = "https://cdn.wallpaperhub.app/cloudcache/7/a/b/d/c/1/7abdc17fa1b54782ac5a9075a81df95289988f54.jpg"
            profileSrc = "https://image.shutterstock.com/image-vector/cheerful-chubby-man-260nw-125706848.jpg"
            title = "My Name" />
            <StoryIn 
            image = "https://cdn.wallpaperhub.app/cloudcache/7/a/b/d/c/1/7abdc17fa1b54782ac5a9075a81df95289988f54.jpg"
            profileSrc = "https://image.shutterstock.com/image-vector/cheerful-chubby-man-260nw-125706848.jpg"
            title = "My Name" />
        </div>
    )
}

export default Story
