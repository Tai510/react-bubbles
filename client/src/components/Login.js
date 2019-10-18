import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios';

const initialState = {
  username: '',
  password: '',
}

const Login = (props) => {

  const [userConnect, setUserConnect] = useState(initialState)

  const handleChange = e => {
    e.preventDefault();
    setUserConnect({...userConnect, [e.target.name]: e.target.value})
    console.log('userConnect value...', userConnect)
}

const onSubmit = e => {
  e.preventDefault();
  axios
      .post("http://localhost:5000/api/login", userConnect)
      .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("bubbles");
      })
      .catch(err => console.log(err));
};



  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit}>
        <input type='text' 
        onChange={handleChange} 
        name='username' 
        value={userConnect.username} 
        placeholder='Username'>
        </input>
        <input type='password' 
        onChange={handleChange} 
        name='password' 
        value={userConnect.password} 
        placeholder='Password'>
        </input>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
