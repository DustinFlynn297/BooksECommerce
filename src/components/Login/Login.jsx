import React, { useState } from "react";
import styled from "styled-components";



const LoginDiv = styled.div`

.LoginContainer{
  width: 100%;
  // height: 100%;
  background-color: #eeeeee;
  color: red;
  display:flex; 
  justify-content:center;
  align-items:center;
  height:100vh;

}

.loginInput{
  width: 100%;
  padding: 12px 20px;
  // margin: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box
}



`

const Login = (props) => {
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setLoginUser(previousState => ({
      ...previousState,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = (event) => {  
    debugger;  
    console.log("Inside Handle Submit")
    event.preventDefault()
    console.log("handlesubmit", loginUser);
    props.login(loginUser)

  }

  return (
    <div>
        <LoginDiv> 
        <div className = "LoginContainer">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input

            className = "loginInput"
            name="Email"
            value={loginUser.Email}
            onChange={handleChange}
            type="text"
          />
          <br />
          <label htmlFor="">Password</label>
          <input

            className = "loginInput"
            name="Password"
            value={loginUser.Password}
            onChange={handleChange}
            type="password"
          />
          <button type = "submit">Login</button>
        </form>
        </div>
        </LoginDiv>
      </div>
    
  );
};

export default Login;