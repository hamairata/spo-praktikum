import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default function Login({ setUser }) {
  const [username, setUsername] = useState();
  const [userpassword, setUserpassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/userlogin", {
        username,
        userpassword,
      });
      setUser(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setUserpassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit" className="submitButton">
            Login
          </button>
          <button className="submitButton">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};
