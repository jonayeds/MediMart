import { RootState } from "@/redux/store";
import { IMedicine } from "@/types/medicine";
import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface IAuthUser {
    email:string;
    role:"admin"|"customer";
    phoneNumber:string;
}

type TCartState = {
    medicine:IMedicine;
    quantity:number;
}

const initialState:TCartState[] = []

const cartSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        addToCart:(state, action:PayloadAction<TCartState>)=>{
            let isExists =false;
            const cart = state.map(m=> {
                if(m.medicine._id === action.payload.medicine._id){
                    isExists = true
                    m.quantity++
                }
                return m
            })
            if(!isExists){
                state.push(action.payload)
            }else{
                state = cart
            }
        },
        removeFromCart :(state, action:PayloadAction<string>)=>{
            state.filter(m=> m.medicine._id !== action.payload )
        }
    }
})


export const selectCart = (state: RootState )=>state.cart

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer