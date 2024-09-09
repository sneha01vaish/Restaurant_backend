import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import style from './signin.module.css';
import googleIcon from '../Assets/icons/google.png';
import facebookIcon from '../Assets/icons/facebook.png';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // For navigation after login

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setErrorMessage('Please enter all required details.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/user/login', {
        email: email,
        password: password,
      });

      if (response.data.status === 'Success') {
        // Store the token in local storage for authenticated requests
        localStorage.setItem('token', response.data.token);

        // Check if the user is an owner
        if (response.data.role === 'owner') {
          // Redirect owner to the profile page
          navigate('/profile');
        } else {
          // Redirect other roles (e.g., customer, staff) to a different page if needed
          navigate('/dashboard');
        }
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials and try again.');
      console.log(error);
    }
  };

  return (
    <div className={style.head}>
      <form className={style.form} onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className={style.formInputs}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label style={{ marginTop: '20px' }} htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Forgot Password</span>
        </div>
        <div className={style.formLoginButton}>
          <button className={style.login} type="submit">Login</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <h4>or continue with</h4>
          <div className={style.socialIcons}>
            <button><img src={googleIcon} alt="google" width="20" /></button>
            <button><img src={facebookIcon} alt="google" width="20" /></button>
          </div>
          <h4 style={{ marginTop: '10px' }}>
            Don't have an account yet? 
            <Link to="/signup" style={{ color: '#fff', fontSize: '15px' }}> Register </Link> for free
          </h4>
        </div>
      </form>
    </div>
  );
};

export default Signin;
