import {configureStore} from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlices"
const Store = configureStore({
    reducer:{
        todos:TodoSlice
    }
})

export default Store
