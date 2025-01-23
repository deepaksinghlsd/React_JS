import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../redux/todoSlice"
const store = configureStore({
reducer:{
todos:todoSlice
}
})

export default store