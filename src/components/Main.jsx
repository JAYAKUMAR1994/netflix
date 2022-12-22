import React, { useEffect, useRef } from 'react'
import avatorVideo from '../Videos/videoplayback.mp4';
import '../App.css';


const Main = ({val}) => {
  
  const vidref = useRef(null)
  useEffect(() => {
    val === "on" ? vidref.current.play() : vidref.current.pause();
  },[val])
 

  return(
  <div className="App">
      <video ref={vidref} loop muted>
      <source src={avatorVideo} />
      </video>
    </div>
    
  )
  
}

export default Main