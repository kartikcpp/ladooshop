import React from 'react';
import { createStore } from 'redux';

const initData={

    products:[
        {pName:'ladoo besan',price:10},
        {pName:'ladoo besan',price:10},
        {pName:'ladoo besan',price:10},
        {pName:'ladoo besan',price:10},
        {pName:'ladoo besan',price:10},
        {pName:'ladoo besan',price:10},
        {pName:'ladoo besan',price:10},
        {pName:'ladoo besan',price:10},
        {pName:'ladoo besan',price:10},
        {pName:'ladoo besan',price:190}
    ],
    cart:[],
    total:0
}
const reducer=(state=initData,action)=>{
console.log(action)
if(action.type==='add'){return{ ...state,cart:[...state.cart,action.payload],total:state.total+0+action.payload.price} }
    return state
}
const store=createStore(reducer)
export default store;