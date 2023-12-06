
import { useState } from 'react'
import './css/style.css'    
import logo from './img/logo.png'
import {Link} from 'react-router-dom';


function App() {

  const API_URL = "http://localhost:3000";
  const [Error,setError] = useState(" ")
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")

  const handleLogin = (e) =>{
    e.preventDefault()

    const User = {
      email: Email,
      password: Password,
    };

    fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('token',data.accessToken);
        if (data.user.role == "student" || data.user.role == "admin"){
          window.location.href = "/";
          console.log(data)
        }
      })
      .catch((error) => {
        setError(error)
        console.log(JSON.stringify(User))
      });
  }

  return (
    <>
      <div className="container">
      <img
        className="logo"
        alt="University of San Carlos Logo"
        src={logo}
      />
      <h2>CES Points Tracker</h2>
      <form>
        <label >ID Number</label>
        <input type="text" onChange={e => setEmail(e.target.value)}required />
        <label >Password</label>
        <input type="password" onChange={e => setPassword(e.target.value)}required />
        <input type='submit' value="Login" onClick={handleLogin}/>
      </form>

      <a href="#">Forgot Password?</a>
      <div className='reg'>
      <Link to = "/Register">Create account here</Link>
     </div>

        
    </div>
    </>
  )
}

export default App
