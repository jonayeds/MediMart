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
            return state.filter(m=> {
                console.log(m.medicine._id !== action.payload)
                return m.medicine._id !== action.payload
            } )
            
        },
        updateQuantity:(state, action:PayloadAction<{medicineId:string, quantity:number}>)=>{
            const cart = state.map(m=> {
                if(m.medicine._id === action.payload.medicineId){
                    m.quantity = action.payload.quantity
                }
                return m
            })
            state = cart
        }
    }
})


export const selectCart = (state: RootState )=>state.cart

export const {addToCart, removeFromCart, updateQuantity} = cartSlice.actions

export default cartSlice.reducer