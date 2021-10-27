import React, { useState } from 'react';

const Login = (props) => {
    const [loginUser, setLoginUser] = useState({UserName: "", Password: ""});

    const handleChange = (event) =>  {
        setLoginUser(prevstate => ({
            ...prevstate,
            [event.target.name]: event.target.value
        }))
    }
}

