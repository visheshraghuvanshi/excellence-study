import React, {useState} from 'react';
import {FaGoogle} from 'react-icons/fa';
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import firebase from "firebase/compat/app";
import {signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from '../FirebaseAuth';
import SignUp from './SignUp';

function Login() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [showSignUp, setShowSignUp] = useState(false);
    const [email, setEmail] = useState(''); // Added state for email
    const [password, setPassword] = useState(''); // Added state for password

    const toggleSignUp = () => {
        setShowSignUp(!showSignUp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((data) => {
            console.log(data, "authData");
            navigate("/home");
        }).catch((err) => {
            alert(err.code);
        });
    };

    const handleReset = () => {
        navigate("/reset");
    }

    return (
        <> {
            user ? navigate('/explore') : (
                <> {
                    showSignUp && <SignUp/>
                }
                    <SignIn toggleSignUp={toggleSignUp}
                        handleSubmit={handleSubmit}
                        handleReset={handleReset}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}/>
                </>
            )
        } </>
    );
}

function SignIn({
    toggleSignUp,
    handleSubmit,
    handleReset,
    email,
    setEmail,
    password,
    setPassword
}) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit}
                    className="login-form">
                    <div className="form-group">
                        <input name="email" type="email" placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="form-input"/>
                    </div>
                    <div className="form-group">
                        <input name="password" type="password" placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="form-input"/>
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <div className="separator">or</div>
                <center>
                    <button type="button"
                        onClick={signInWithGoogle}
                        className="google-sign-in">
                        <FaGoogle/>
                        Sign in with Google
                    </button>
                </center>
                <div className="signup-link"
                    onClick={toggleSignUp}>
                    Don't have an account? Sign Up
                </div>
                <div className="home-redirect">
                    <Link to="/"
                        style={
                            {
                                color: "inherit",
                                textDecoration: "inherit"
                            }
                    }>
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
