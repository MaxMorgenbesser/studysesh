
import { createSlice } from "@reduxjs/toolkit"
import { UserModel, userPayload } from "../../../Models/User.Model"

const initialState: UserModel = {
        id:'',
        userName:"",
        email:"",
        phoneNumber:""        
}

const UserSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        addUser(state,action:userPayload){
            state.id = action.payload.id,
            state.email = action.payload.email,
            state.phoneNumber = action.payload.phoneNumber,
            state.userName = action.payload.phoneNumber
        },
        removeUser(state,action){
            state=initialState
        }
    }
})


export const { addUser, removeUser} = UserSlice.actions

export default UserSlice.reducer