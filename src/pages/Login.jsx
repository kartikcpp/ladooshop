import React,{useState} from 'react'
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
function Login() {

    let navigate=useNavigate()
  // States for registration
    const [user,setUser]=useState({})
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        console.log(user)
        
    })


  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
       const user= await signInWithEmailAndPassword(auth,email,password)
        console.log(user)
        navigate('/')


    } catch (error) {
        console.log(error)
    }
  };

  // Showi
    return (
        <div>
          
          <div className="form">
      <div>
        <h1>User Login</h1>
      </div>

      <form>
        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
      <h1></h1>
    </div>  
        </div>
    )
}

export default Login
