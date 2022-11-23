import React, {useState} from 'react'
import memeData from '../memeData'


export default function Meme(){
    // const[memeImage, setMeme] = useState("")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const[allMemes, getAllMemes] = useState([])
    
    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => getAllMemes(data.data.memes))
    })

    function getImage(){
      const randomNumber = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomNumber].url
      setMeme(prevMeme =>{
          return{
              ...prevMeme,
              randomImage:url
          }
      })
    
    //   console.log(url)
      
    }
      function handleChange(event){
          const {name, value} = event.target
          setMeme(prevMeme =>({ 
              ...prevMeme,
             [name]: value 
          }))
      } 
      
    return(
        <main>
        
            <div className="form">
            
                <input 
                type= "text"
                 className ="text--input" 
                 placeholder="Top text"
                 name ="topText"
                 value={meme.topText}    
                 onChange ={handleChange}     
                 />
                <input type= "text"
                 className ="text--input" 
                 placeholder="Bottom text"
                 name ="bottomText"
                 value={meme.bottomText}
                 onChange = {handleChange}
                 />
                <button
                 className="input--button"
                  onClick= {getImage}>Get a new meme image 🖼
                  </button> 
                
            </div>
            <div className="meme">
            <img src = {meme.randomImage} className= "meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    )
}