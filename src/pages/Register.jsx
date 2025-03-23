import React from 'react'

const Register = () => {
  return (
  <div>
  <h1 style={{marginLeft:"600px", marginBottom:"40px",textShadow:"4px 4px 8px rgba(0, 0, 0, 0.4)"}}>Registration</h1>
  <form style={{border:"3px solid black", padding:"10px",boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)"}}>
  <div class="row">
  <div class="col">
    <label for="exampleFirstName" style={{fontWeight:"bold"}}>First Name</label>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
  </div>
  <div class="col">
  <label for="exampleLastName" style={{fontWeight:"bold"}}>Last Name</label>
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
</div>
  <div class="mb-2">
    <label for="exampleInputEmail1" class="form-label" style={{fontWeight:"bold"}} >Email Address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-2">
    <label for="phoneNumber" class="form-label" style={{fontWeight:"bold"}} >Phone Number</label>
    <input type="number" class="form-control" id="phoneNumber" aria-describedby="number" placeholder="Enter your moblie number" />
  </div>
  <div class="mb-2">
    <label for="exampleInputPassword1" class="form-label" style={{fontWeight:"bold"}} >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password"/>
  </div>
  <div id="passwordHelpBlock" class="form-text">
      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
  </div>
  <div class="mb-2">
    <label for="confirmPassword" class="form-label" style={{fontWeight:"bold"}} >Confirm Password</label>
    <input type="password" class="form-control" id="confirmPassword" placeholder="Renter same password" />
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
 </form>
  </div>
  )
}
export default Register
