import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import '../Css/Home.css'
import homeback from '../Images/home.jpg'


const Home = () => {
    const n = useNavigate()
    const inputRef = useRef()
    const [name, setName] = useState("")
    const [paswrd, setPaswrd] = useState("")
    
    let handleChange = () => {     
        if (paswrd.length === 0) {
            inputRef.current.focus()
        }
        else {
            window.alert("success")
        n("/Main")
        }      
        
    }
  return (
      <div className="container-home" style={{backgroundImage:`url(${homeback})`}}>
          <form>
              <fieldset>
                  <legend >Signup</legend>
                  <div className="child-home">                 
                  <label>Name:</label>
                      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'  minLength={5} required /><br/>             
                  
                  <label>Password:</label>
                      <input type="password" name="password" value={paswrd} onChange={(e)=>setPaswrd(e.target.value)} placeholder='Enter Password' minLength={5} required ref={inputRef}/>
                      
                      <input type="submit" value="Submit" onClick={() => handleChange()}  />  
                  </div>                 
  
              </fieldset>
  
</form>
    </div>
  )
}

export default Home