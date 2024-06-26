import React, { useState } from "react";
import COVER_IMAGE from "../assets/hilti_office.jpg";
import GOOGLE_ICON from "../assets/google_icon.jpg";
import HILTI_LOGO from "../assets/hilti_logo.jpg";
import "../styles/RegisterPage.css"; // Import the CSS file for styling
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const signupWithUsernameAndPassword = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
      alert("Registered Successfully!");
    } catch {
      setNotice("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="content">
          <h1 className="hilti">HILTI CONNECT</h1>
          <p className="subtitle">
            Hilti’s One-Stop Talent Acquisition Mobile Application
          </p>
        </div>
        <img src={COVER_IMAGE} className="cover-image" />
      </div>

      <div className="right-section">
        <img src={HILTI_LOGO} className="hilti-logo" />
        <div className="button_container">
          <button className="button">Job Seeker</button>
          <button className="button">Company</button>
        </div>

        <div className="form-container">
          <div className="form-header">
            <h3 className="form-title">Register</h3>
            <p className="form-subtitle">
              Here's the start for more opportunities!
            </p>
          </div>

          <div className="input-container">
            <input
              type="fullname"
              placeholder="Full Name"
              className="input-field"
            />

            <input
              type="email"
              placeholder="Email"
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="input-field"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="remember-forgot-container">
            <div className="remember-me">
              <input type="checkbox" className="checkbox" />
              <p className="remember-text">Remember Me</p>
            </div>
          </div>

          <div className="button-container">
            <button
              className="login-button"
              onClick={(e) => signupWithUsernameAndPassword(e)}
            >
              Register
            </button>
          </div>

          <div className="separator">
            <div className="line"></div>
            <p className="or">or</p>
          </div>

          <div className="google-signin">
            <img src={GOOGLE_ICON} className="google-icon" />
            Sign Up with Google
          </div>
        </div>

        <div className="signup-section">
          <p className="signup-text">
            Already have an account?
            <span className="signup-link">
              <Link to="/login" className="nav-menu-link">
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
