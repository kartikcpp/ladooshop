import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./Navbar.css";
import { Search, ShoppingCartRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
function Navbar() {
  const numberofproduct = useSelector((state) => state.cart.length);
  const [user, setUser] = useState();

  function logout() {
    signOut(auth)
      .then(() => {
        console.log("logout");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUser(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <div>
      <div className="container">
        <div className="i left">
          <Link to="/">
            <h2>LadooShop</h2>
          </Link>
        </div>
        <div className="i center">
          <TextField id="outlined-basic" variant="outlined" size="small" />
          <Button variant="outlined" startIcon={<Search />}>
            Search
          </Button>
        </div>
        <div className="i right">
          {!user ? (
            <div className="loginregister">
              <Link to="/register">
                <div className="register">Register</div>
              </Link>
              <Link to="/login">
                <div className="login">Log In</div>
              </Link>
            </div>
          ) : (
            <div className="logout">
              <Button onClick={logout}>Log Out</Button>
            </div>
          )}

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
