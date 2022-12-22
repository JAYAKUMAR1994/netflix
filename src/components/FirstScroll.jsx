import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Css/FirstScroll.css'

import { updateSlice } from '../Slice/ScrollSlice'
import ImageView from './ImageView'


const FirstScroll = () => {
    const n = useSelector((state) => state.scroll.items)
    const dispatch = useDispatch()
    
    const [input, setInput] = useState("false")
    
    const handler = (name) => {
        if (input === "false") {
            setInput("true")
            return {
                name,
                show:"true",
            }
           
        }
        else {
            setInput(input)
            return {
                name,
                show:"true",
            }
        }
        // setView(name)

       
    }
console.log(input)
    return (
        <div>
       
         <div id="carousel">    
           
            <div class="slide">
                 {n.map((items) => (
            
                     <img src={items.name} alt={""} height="200px" width="450px" onMouseOver={() => dispatch(updateSlice(handler(items.name)))} />
                    
                 ))}       
                </div>
                <ImageView/>
            </div> 
</div>          
          
            )
           
}

export default FirstScroll