import { createSlice } from "@reduxjs/toolkit"
import one from '../Images/one.jpg'
import two from '../Images/two.jpg'
import three from '../Images/three.jpg'
import four from '../Images/four.jpg'
import five from '../Images/five.jpg'
import six from '../Images/six.jpg'
import seven from '../Images/seven.jpg'
import eight from '../Images/eight.jpg'
import nine from '../Images/nine.jpg'
import ten from '../Images/ten.jpg'


const initialState = {
   items: [
    { name: one },
    { name: two },
    { name: three },
    { name: four },
    { name: five },
    { name: six },
    { name: seven },
    { name: eight },
    { name: nine },
    { name: ten }
    ],

    info: {
        name:"",
        show: "",
        video:""
   }
}

const scrollSlice = createSlice({
    name: "scrollSlice",
    initialState,
    reducers: {
        updateSlice: (state, action) => {
           
            state.info.name = action.payload.name
            state.info.show = action.payload.show
            state.info.video=action.payload.video
        }
    }
})

export default scrollSlice.reducer
export const{updateSlice}=scrollSlice.actions