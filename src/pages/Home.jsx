import React from "react";
import { useSelector } from "react-redux";
import Annoucment from "../components/Annoucment";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import homeimg from "../images/ladu.jpg";
import "./Home.css";

function Home() {
    const products=useSelector((state)=>state.products)

  return (
    <div className="home">
      <Annoucment />
      <Navbar />

      <div className="homecontainer">
        <img className="homeimg" src={homeimg} alt="homeimg" />
      </div>
      <div className="products">
        {products.map((singleproduct,id)=>{

            return ( <Product key={id} id={id} name={singleproduct.name} price={singleproduct.price}/>)

        })}
       
        
      </div>
    </div>
  );
}

export default Home;
