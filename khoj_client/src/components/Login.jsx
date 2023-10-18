import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState("");

  const data = {
    email,
    password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/login", data)
      .then((res) => {
        navigate("/",{state:{data:res.data}});
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-card">
      <form className="login-form" action="" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="input-field">
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
        </div>
        <div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </div>
      </form>
      <p>
        Haven't registered yet?
        <span onClick={() => navigate("/signup")}>Login here</span>
      </p>
    </div>
  );
};

export default Login;
