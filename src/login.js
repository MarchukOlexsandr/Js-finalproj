import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import firebase from "./firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, pass);
      if (user) {
        alert("Login successful");
        // Redirect to main page
        window.location.href = "./mainpage/index.html";
      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Please check your email and password.");
    }
  };
  return (
    <>
      <div className="main_container_signup">
        <div className="header">
          <h2>signup</h2>
        </div>

        <div className="box">
          <input
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="box">
          <input
            type="password"
            value={pass}
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          ></input>
        </div>
        <p>
          Don't Have an Account <Link to="/">Create Account</Link>
        </p>
        <button onClick={submit}>Login</button>
      </div>
    </>
  );
};

export default Login;
