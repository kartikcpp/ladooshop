import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Checkoutproduct from '../components/Checkoutproduct'
import Navbar from '../components/Navbar'
import './Checkout.css'
import {   onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase-config'
import{useNavigate} from 'react-router-dom'
function Checkout() {
    
    const total=useSelector(state=>state.total)
    const cart=useSelector(state=>state.cart)
       let navigater=useNavigate()
        const [issigned,setsigned]=useState(false)
        
       

       
    function redirecttohome(){
        alert('not signed')
        navigater('/')
    }
onAuthStateChanged(auth, (user) => {
  if (user) {
      setsigned(true)
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user.email)
    // ...
  } else {
      
        setsigned(false)
    // User is signed out
    // ...
  }
});
    return (
        <div>
            <Navbar/>
    <center><h2>Shopping Basket</h2></center>
            <div className="checkoutcontainer">
            
                <div className="checkoutleft">
                    

                    {cart.map((singlecartitem,id)=>{
                        return( <Checkoutproduct key={id} id={id} name={singlecartitem.pName} price={singlecartitem.price} imgg={singlecartitem.img}/>)
                    })}
                   
                </div>
                <div className="checkoutright">
                    <h1>total:{total}</h1>
                    <Button >proceed to checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
