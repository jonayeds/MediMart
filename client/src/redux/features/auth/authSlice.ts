import { RootState } from "@/redux/store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface IAuthUser {
    email:string;
    role:"admin"|"customer";
    phoneNumber:string;
}

type TAuthState = {
    user: null | IAuthUser,
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
            localStorage.setItem("accessToken", token as string) 
            state.user = user
            state.token = token
        },
        logOut :(state)=>{
            state.user = null;
            state.token = null;
            localStorage.removeItem("accessToken")
        }
    }
})

export const selectCurrentToken = (state: RootState )=>state.auth.token
export const selectCurrentUser = (state: RootState )=>state.auth.user

export const {setUser, logOut} = authSlice.actions

export default authSlice.reducer