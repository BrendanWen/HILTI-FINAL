import COVER_IMAGE from '../assets/hilti_office.jpg';
import GOOGLE_ICON from '../assets/google_icon.jpg';
import HILTI_LOGO from '../assets/hilti_logo.jpg';
import '../styles/LoginPage.css'; // Import the CSS file for styling
import {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom'


const LoginPage = () => {
     
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
           
        const onLogin = (e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/dashboard");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
           
        }
         
    return (
        <div className="login-container">
            <div className='left-section'>
                <div className='content'>
                    <h1 className='hilti'>HILTI CONNECT</h1>
                    <p className='subtitle'>Hilti’s One-Stop Talent Acquisition Mobile Application</p>
                </div>
                <img src={COVER_IMAGE} className="cover-image"/>
            </div>

            <div className='right-section'>
                <img src={HILTI_LOGO} className='hilti-logo'/>
                <div className='button_container'>
                <button className='button'>Job Seeker</button>
                <button className='button'>Company</button>
                </div>

                <div className='form-container'>
                    <div className='form-header'>
                        <h3 className='form-title'>Login</h3>
                        <p className='form-subtitle'>Welcome Back! Please enter your details</p>
                    </div>

                    <div className='input-container'>
                        <input
                            type='email'
                            placeholder='Email'
                            className='input-field' 
                            onChange={(e)=>setEmail(e.target.value)}/>
                        
                        <input
                            type='password'
                            placeholder='Password'
                            className='input-field'
                            onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <div className='remember-forgot-container'>
                        <div className='remember-me'>
                            <input type='checkbox' className='checkbox' />
                            <p className='remember-text'>Remember Me</p>
                        </div>

                        <p className='forgot-password'>Forgot Password?</p>
                    </div>

                    <div className='button-container'>
                        <button className='login-button' onClick={onLogin}>
                            Log In
                        </button>
                        <button className='register-button'><Link to="/Register" className="nav-menu-link">
                            Register</Link>
                        </button>
                    </div>

                    <div className='separator'>
                        <div className='line'></div>
                        <p className='or'>or</p>
                    </div>

                    <div className='google-signin'>
                       <img src={GOOGLE_ICON} className='google-icon'/>
                        Sign In with Google
                    </div>
                    
                </div>

                <div className='signup-section'>
                    <p className='signup-text'>Don't have an account?<span className='signup-link'><Link to="/register" className="nav-menu-link">Sign up for free</Link></span></p>
                </div>
            </div>
        </div>
    )

}

export default LoginPage;
