import { createSlice } from '@reduxjs/toolkit'
import productData from '../cardData'

const initialState = {
    cart : [],
    items:productData,
    totalQuantity : 0, 
    totalPrice:0
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        increment: (state,action)=>{
            state.cart =state.cart.map((item)=>{
                if(item.id === action.payload){
                    return {...item,quantity:item.quantity +1}
                }
                return item;
            });
        },
        decrement: (state,action)=>{
            state.cart =state.cart.map((item)=>{
                if(item.id === action.payload){
                    if(item.quantity >0)
                    return {...item,quantity:item.quantity -1}
                }
                return item;
               
            });
        },
        addToCart: (state,action)=>{
            let find = state.cart.findIndex((item)=>item.id === action.payload.id);
            if(find >=0 ){
                state.cart[find].quantity +=1;
            }else{
                state.cart.push(action.payload)
            }
        },

        getCartTotal: (state) =>{
            let {totalQuantity,totalPrice} = state.cart.reduce(
                (cartTotal,cardItem)=>{
                    const {price, quantity}=cardItem;
                    const itemTotal = price*quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice:0,
                    totalQuantity:0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
        removeItem: (state,action) =>{
            state.cart = state.cart.filter((item)=>item.id!== action.payload);
        }
    },
})

export const {increment,decrement,removeItem,addToCart,getCartTotal} = cartSlice.actions

export default cartSlice.reducer;