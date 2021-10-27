import React, {useState} from 'react';

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
      {/*might need to put type of request*/}
      <form action="" onSubmit={handleSubmit} >
        <label for="">First Name</label>
        <input name="FirstName" value={registerUsers.FirstName} onChange={handleChange} type="text"/>
        <label htmlFor="">Last Name</label>
        <input name="LastName" value={registerUsers.LastName} onChange={handleChange} type="text"/>
        <label htmlFor="">User Name</label>
        <input name="UserName" value={registerUsers.UserName} onChange={handleChange} type="text"/>
        <label htmlFor="">Password</label>
        <input name="Password" value={registerUsers.Password} onChange={handleChange} type="text"/>
        <label htmlFor="">Email</label>
        <input name="Email" value={registerUsers.Email} onChange={handleChange} type="text"/>
        <label htmlFor="">Phone Number</label>
        <input name="PhoneNumber" value={registerUsers.PhoneNumber} onChange={handleChange} type="text"/>
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}
