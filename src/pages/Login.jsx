import React from 'react'
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#f0f0f0";
  });  
  return (
  <>
  <h1 style={{marginTop:"50px", marginLeft:"660px",width:"100%",textShadow:"4px 4px 8px rgba(0, 0, 0, 0.4)"}}>Sign In</h1>
 <div style={{ marginTop:"50px", marginLeft:"400px", height:"100px", width:"50%"}}>
  <form style={{padding:"10px", border:"3px solid black", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)"}}>
  <div class="mb-1">
    <label style={{fontWeight:"bold"}} for="exampleInputEmail1" class="form-label" >Email Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
    <div id="emailHelp" class="form-text"></div>
   </div>
  <div class="mb-1">
    <label style={{fontWeight:"bold"}} for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter password' />
    <div id="passwordHelpBlock" class="form-text">
      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
</div>
</>
  )
}

export default Login
