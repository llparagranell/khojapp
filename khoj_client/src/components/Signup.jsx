import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    name,
    email,
    password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    axios
      .post("http://localhost:3000/user/sign", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-card">
      <form className="login-form" action="" onSubmit={handleSubmit}>
        <h1>Register</h1>

        <div className="input-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="enter your name..."
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{width:'100%',textAlign:"center"}}>
            <button type="submit" className="login-btn">
              Register
            </button>
          </div>
        </div>
      </form>
      <p>
        Haven't registered yet?
        <span onClick={() => navigate("/auth")}>Login here</span>
      </p>
    </div>
  );
};

export default Signup;
