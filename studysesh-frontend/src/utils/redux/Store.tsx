import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/User.slice";

const Store = configureStore({
    reducer:{
        user:UserSlice
    }
})

export default Store