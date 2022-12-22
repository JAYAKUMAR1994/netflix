import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from './Slice/ScrollSlice'

const Store = configureStore({
    reducer: {
        scroll:scrollReducer,
    }
})

export default Store