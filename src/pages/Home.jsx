import React from "react";
import { useSelector } from "react-redux";
import Annoucment from "../components/Annoucment";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import "./Home.css";

function Home() {
    const products=useSelector((state)=>state.products)

  return (
    <div className="home">
      <Annoucment />
      <Navbar />

      
        
    
      <div className="products">
        {products.map((singleproduct,id)=>{

            return ( <Product key={id} id={id} name={singleproduct.pName} price={singleproduct.price} img={singleproduct.img}/>)

        })}
       
        
      </div>
    </div>
  );
}

export default Home;
