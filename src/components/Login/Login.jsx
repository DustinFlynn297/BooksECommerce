import React, { useState } from "react";

const Login = (props) => {
  const [loginUser, setLoginUser] = useState({ userName: "", password: "" });

  const handleChange = (event) => {
    setLoginUser(previousState => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    debugger;
    console.log("Inside Handle Submit")
    event.preventDefault();
    props.loggin(loginUser);
    console.log("handlesubmit", loginUser)
    window.location = '/';
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">User Name</label>
        <input
          name="userName"
          value={loginUser.userName}
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
  );
};

export default Login;