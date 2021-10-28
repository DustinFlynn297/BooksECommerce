import React, { useState } from "react";

const Login = (props) => {
  const [loginUser, setLoginUser] = useState({ UserName: "", Password: "" });
  const handleChange = (event) => {
    setLoginUser((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loggin(loginUser);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          name="Email"
          value={loginUser.Email}
          onChange={handleChange}
          type="text"
        />
        <br />
        <label htmlFor="">Password</label>
        <input
          name="Password"
          value={loginUser.Password}
          onChange={handleChange}
          type="text"
        />
      </form>
    </div>
  );
};

export default Login;