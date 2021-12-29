import React from 'react'
import "./Signup.css";
const signup = () => {
    return (
        <div>
 
  <title>Slide Navbar</title>
  <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
  
  <div className="main">
    <input type="checkbox" id="chk" aria-hidden="true" />
    <div className="signup">
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input type="text" name="txt" placeholder="User name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="pswd" placeholder="Password" required />
        <button>Sign up</button>
      </form>
    </div>
    <div className="login">
      <form>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="pswd" placeholder="Password" required />
        <button>Login</button>
      </form>
    </div>
  </div>


 
        </div>
    )
}

export default signup

