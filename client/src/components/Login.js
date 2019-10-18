import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialState = {
  email: '',
  username: '',
  password: '',
}

const Login = (props) => {

  const [userConnect, setUserConnect] = useState({
    email: '',
    username: '',
    password: '',
  })

  const handleChange = e => {
    e.preventDefault();
    setUserConnect({...userConnect, [e.target.name]: e.target.value})
    console.log('userConnect value...', userConnect)
}

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('./login', userConnect)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('bubbles');
    })
}



  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit}>
        <input onChange={handleChange} name='email' value={userConnect.email} placeholder='Email'></input>
        <input onChange={handleChange} name='username' value={userConnect.username} placeholder='Username'></input>
        <input onChange={handleChange} name='password' value={userConnect.password} placeholder='Password'></input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
