import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Css/FirstScroll.css'
import { updateSlice } from '../Slice/ScrollSlice'

const ImageView = () => {
  const n = useSelector((state) => state.scroll.info)
  const dispatch = useDispatch()
  
  const handler = (name) => {
    return {
        name,
        show:"false",
    }
}
 
  return (
  <>
    {n.show==="true"?
    <div className='small-container'>
    
      <div className='up'>
          
            
                  <img src={ n.name } alt ="error" 
                    height="100%"
                    width="100%"
                  ></img>
                 
             
      </div>

          <div className='down'>
        <svg className='a' ><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z"></path></svg>
        <svg className="b" ><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
            <svg className="c"><path d="m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z"></path></svg>
          </div>
          <div className="d">
          <i class="fa fa-times-circle" aria-hidden="true" onClick={() => dispatch(updateSlice(handler()))}></i>
           </div>
      </div>
        : null}
      </>
  )
}

export default ImageView