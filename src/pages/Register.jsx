import { useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
export default function Form() {
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
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);

      

    } catch (error) {
        console.log(error)
    }
  };

  // Showing success message

  // Showing error message if error is true

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
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
  );
}
