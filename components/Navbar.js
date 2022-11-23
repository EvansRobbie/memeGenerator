import React from 'react'

export default function Navbar(){
    return(
        <nav>
            <img src ="../images/troll-face.png" className = "logo" />
            <h3 className = "nav--header" >Meme Generator</h3>
            <h5 className = "nav--end" >React course - Project #</h5>
        </nav>
    )
}