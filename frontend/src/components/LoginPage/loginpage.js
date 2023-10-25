import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./loginpage.css";
// import {logo} from ""

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
  <div className="containerr">
    <div className="box">

    <div className="box1">
            {/* <div className="logo">
               <img src={logo}/>
            </div> */}
            
            <div className="login-logo">
              <img className="login-img" src="https://www.lnmiit.ac.in/images/logo.png" />
            </div>
      </div>
      
      <div className="box2">
      <div className="login-image-container">
        <img
          className="bg-img1"
          src={process.env.PUBLIC_URL + "/assets/background_image.jpeg"}
          alt="bg-img-loader"
          />
      </div>

      <div className="login-container">
        <h1 className="login-container-heading">Login</h1>
        <div className="login-hr-div">
          <p className="login-hr"></p>
        </div>
        <form className="login-form" action="POST">
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input type="submit" onClick={submit} />
        </form>
        <div className="login-divider-div">
        <p className="login-divider" style={{ color: "white" }}>
          Or
        </p>
        </div>
        <div className="last-text">
          <p>Don't have an account?</p>
          <Link to="/signup" className="link">
            <p className="link">Sign up</p> 
          </Link>
        </div>
      </div>

    </div>

    </div>
  </div>
  );
}

export default Login;
