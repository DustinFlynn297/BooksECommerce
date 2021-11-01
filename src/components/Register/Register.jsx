import React, {useState} from 'react';
import styled from "styled-components";

const RegisterDiv = styled.div`

.Register-Container{
  width: 100%;
  // height: 100%;
  background-color: #eeeeee;
  color: red;
  display:flex; 
  justify-content:center;
  align-items:center;
  height:100vh;

}

.Register-Input{
  width: 100%;
  padding: 12px 20px;
  // margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box
}



`

export const RegisterUser = (props) => {
  const [registerUsers, setRegisterUsers] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Password: "",
    Email: "",
    PhoneNumber: ""})

  const handleChange = (event) => {
    setRegisterUsers(previousState => (
      {...previousState,
      [event.target.name] : event.target.value}
    ));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(registerUsers);

  }

  return(
    <div>
      <RegisterDiv>
      {/*might need to put type of request*/}
      <div className = "Register-Container">
        
      <form action="" onSubmit={handleSubmit} >
        <label for="">First Name</label>
        <input className = "Register-Input" name="FirstName" value={registerUsers.FirstName} onChange={handleChange} type="text"/>
        <br/>
        <label htmlFor="">Last Name</label>
        <input className = "Register-Input"  name="LastName" value={registerUsers.LastName} onChange={handleChange} type="text"/>
        <br/>
        <label htmlFor="">User Name</label>
        <input className = "Register-Input" name="UserName" value={registerUsers.UserName} onChange={handleChange} type="text"/>
        <br/>
        <label htmlFor="">Password</label>
        <input className = "Register-Input" name="Password" value={registerUsers.Password} onChange={handleChange} type="text"/>
        <br/>
        <label htmlFor="">Email</label>
        <input className = "Register-Input" name="Email" value={registerUsers.Email} onChange={handleChange} type="text"/>
        <br/>
        <label htmlFor="">Phone Number</label>
        <input className = "Register-Input" name="PhoneNumber" value={registerUsers.PhoneNumber} onChange={handleChange} type="text"/>
        <button type="submit">Create Account</button>
      </form>
      </div>
      </RegisterDiv>
    </div>
  )
}
