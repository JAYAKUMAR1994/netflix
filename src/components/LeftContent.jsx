import { React, useState } from 'react'
import '../Css/Body.css'
import Main from './Main'

const LeftContent = () => {
  
  const [input, setInput] = useState("on")
  const [show, setShow] = useState("true")
  const [name, setName] = useState("Pause")
  const [font, setFont] = useState("fa-sharp fa-solid fa-circle-pause")
  
  const handler = (name) => {
    if (name === "true") {
      setInput("off")
      setShow("false")
      setName("Play")
      setFont("fa-sharp fa-solid fa-circle-play")
    }
    else {
      setInput("on");
      setShow("true")
      setName("Pause")
      setFont("fa-sharp fa-solid fa-circle-pause")
    }

  

}
    return (
       
      <div className='container-leftcontent'>
      <div  className='content'>
          <h2> Avatar: Creating the...</h2>
          <h5>The Making-of James Cameron's Avatar. It shows <br/>
          interesting parts of the work on the set.</h5>
            </div>
            
      <div className='play-container'>
                
          <button className='play-button' onClick={() => handler(show)}>         
            <span className='play-symbol'> <i class={font}></i> </span>
            <h1>{name}</h1>
          </button>

          <Main val={input} />
          

          <button className='more-info'>
            <span className='info-symbol'> <i class="fa-sharp fa-solid fa-circle-info"></i> </span>
            <h1>More info</h1>
          </button>

               
            </div>
            
           

        </div>
      
      
   
  )
}

export default LeftContent