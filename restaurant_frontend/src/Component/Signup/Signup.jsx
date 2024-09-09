import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import style from "./signup.module.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Register as");
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const navigate = useNavigate(); // Used for navigation after successful signup

  async function formHandle(e) {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || phone === "") {
      setErrorMessage("Please enter all required details.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/user/register', {
        username: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        phone_number: phone,
        role: role
      });

      if (response.data.status === "Success") {
        setSuccessMessage("Registration successful!");
        // Redirect to login page after 2 seconds
        setTimeout(() => navigate("/signin"), 2000);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration.");
    }
  }

  return (
    <div className={style.head}>
      <div className={style.form}>
        <h1>SignUp</h1>
        <form onSubmit={formHandle}>
          <div className={style.formInputs}>
            <label htmlFor='name'>Username</label>
            <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className={style.passwordInputs}>
              <div>
                <label htmlFor='password'>Password</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
            <input type="number" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="registeras">Register as</option>
              <option value="customer">Customer</option>
              <option value="owner">Admin</option>
              <option value="staff">Employee</option>
            </select>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* Display error message */}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>} {/* Display success message */}
          </div>
          <div className={style.formRegisterButton}>
            <button type="submit">Register</button>
            <h4 style={{margin:'10px 0',textAlign:'center',color:'#fff'}}>Already Registered ? <Link style={{color:'#fff',textDecoration:'none'}} to={"/signin"}>Signin</Link> </h4>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Signup;