import React from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./Navbar.css";
import { Search, ShoppingCartRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
function Navbar() {
  const numberofproduct=useSelector(state=>state.cart.length)
  return (
    <div>
      <div className="container">
        <div className="i left">
        <Link to='/'><h2>LadooShop</h2></Link>  
        </div>
        <div className="i center">
          <TextField id="outlined-basic" variant="outlined" size="small" />
          <Button variant="outlined" startIcon={<Search />}>
            Search
          </Button>
        </div>
        <div className="i right">
          <div className="login">Log IN</div>
          <Link to="/checkout">
            <Badge badgeContent={numberofproduct} color="primary">
              <ShoppingCartRounded />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
