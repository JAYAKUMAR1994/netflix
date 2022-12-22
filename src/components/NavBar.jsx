import React, { useState } from 'react'
import logo from '../Images/netflix-logo.png'
import '../Css/Navbar.css'
import { useNavigate } from 'react-router'
import { updateSlice } from '../Slice/ScrollSlice'
import { useDispatch } from 'react-redux'

const NavBar = () => {
  const [show, setShow] = useState(false)
  const dispatch=useDispatch()
  const n = useNavigate()

  const handleChange = () => {
    n("/") 
    dispatch(updateSlice({name:"",show:""}))
  
  }
  
  return (
      <div className='Navbar-head'>
          <div className='Navbar-head-left'>
              
              <div className='netflix-logo'>
              <img src={logo} alt="netflix-logo"  height="30px" width="90px"/>
              </div>

              <div className='menu-list'>
              <nav className='nav-list'>
                  <a href="#">My list</a>
                  <a href="#">Movies</a>
                  <a href="#">Tv Shows</a>
              </nav>
              </div>

      </div>
      
      <div className='Navbar-head-right' >
      
              <div class="search-container">
          <div className="search-icon">
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              </div>
            <div class="search-box">                
      <input type="text" placeholder="Search.." name="search"/>
          </div>
        </div>
        
        <i class="fa-sharp fa-solid fa-user" onClick={()=>setShow(!show)}></i>
      
       
        
        
          {show?<span class="profile-outlet" >
      <h1 class="signout" onClick={()=>handleChange()}>Sign Out</h1>
      <h1 class="account">Account</h1>
        </span> : null}
      </div>
 
      
           
            </div>
                  
         
          
  )
}

export default NavBar