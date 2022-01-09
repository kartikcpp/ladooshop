
import { createStore } from 'redux';
import img1 from '../images/image1.jpg'
import img2 from '../images/image2.jfif'
import img3 from '../images/image3.jfif'
import img4 from '../images/image4.jfif'

const initData={

    products:[
       
         {pName:'ladoo besan',price:10,img:img1},
         {pName:'ladoo aata',price:10,img:img2},
          {pName:'ladoo boondi',price:10,img:img3},
           {pName:'ladoo til',price:10,img:img4},
           {pName:'ladoo besan',price:10,img:img1},
           {pName:'ladoo aata',price:10,img:img2},
            {pName:'ladoo boondi',price:10,img:img3},
             {pName:'ladoo til',price:10,img:img4},
             {pName:'ladoo besan',price:10,img:img1},
             {pName:'ladoo aata',price:10,img:img2},
              {pName:'ladoo boondi',price:10,img:img3},
               {pName:'ladoo til',price:10,img:img4},
               {pName:'ladoo besan',price:10,img:img1},
               {pName:'ladoo aata',price:10,img:img2},
                {pName:'ladoo boondi',price:10,img:img3},
                 {pName:'ladoo til',price:10,img:img4},
           
    ],
    cart:[],
    total:0
}
const reducer=(state=initData,action)=>{
console.log(action)
if(action.type==='add'){
    console.log(state)
    return{ ...state,cart:[...state.cart,action.payload],total:state.total+action.payload.price} }
else if(action.type==='remove'){
    console.log(state)
    const index=action.payload;
    const newtotal=(state.total)-(state.cart[index].price)
    state.cart.splice(index,1)
    return {...state,total:newtotal}
}   
return state
}
const store=createStore(reducer)
export default store;