import React from 'react'
import { useSelector } from 'react-redux'
import Checkoutproduct from '../components/Checkoutproduct'
import Navbar from '../components/Navbar'

function Checkout() {
    const total=useSelector(state=>state.total)
    const cart=useSelector(state=>state.cart)
    return (
        <div>
            <Navbar/>

            <div className="checkoutcontainer">
                <div className="checkoutleft">
                    <h2>Shopping Basket</h2>

                    {cart.map((singlecartitem,id)=>{
                        return( <Checkoutproduct key={id} id={id} name={singlecartitem.pname} price={singlecartitem.price}/>)
                    })}
                   
                </div>
                <div className="checkoutright">
                    <h1>total:{total}</h1>
                </div>
            </div>
        </div>
    )
}

export default Checkout
