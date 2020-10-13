import React from 'react'
import './Widget.css'

function Widget() {
    return (
        <div className = 'widget'>
            <iframe
            src= "https://www.meteoblue.com/en/weather/widget/three?geoloc=detect&nocurrent=0&noforecast=0&days=5&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"
            width="340"
            height="600"
            style = {{border: "none", overflow: "hidden"}}
            scrolling = "yes"
            frameborder = "0"
            allowTransparency = "True"
            allow = "encrypted-media"             
            >
            </iframe>
            
        </div>
    )
}

export default Widget
