import { RootState } from "@/redux/store";
import { IUser } from "@/types/user";
import {createSlice, PayloadAction} from "@reduxjs/toolkit"



type TAuthState = {
    user: null | IUser,
    token:string | null
}

const initialState:TAuthState = {
    user:null,
    token:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state, action:PayloadAction<TAuthState>)=>{
            const {user, token} = action.payload
            state.user = user
            state.token = token
        },
        logOut :(state)=>{
            state.user = null;
            state.token = null;
        }
    }
})

export const selectCurrentToken = (state: RootState )=>state.auth.token
export const selectCurrentUser = (state: RootState )=>state.auth.user

export const {setUser, logOut} = authSlice.actions

export default authSlice.reducer