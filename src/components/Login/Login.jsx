import React, { useState } from "react";

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
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">User Name</label>
        <input
          name="username"
          value={loginUser.username}
          onChange={handleChange}
          type="text"
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          name="password"
          value={loginUser.password}
          onChange={handleChange}
          type="password"
        />
        <button type = "submit">Login</button>
      </form>
    </div>
  )
};

export default Login;