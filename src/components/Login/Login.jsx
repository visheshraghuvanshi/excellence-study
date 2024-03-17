import {useState} from 'react';
import {FaGoogle} from 'react-icons/fa';
import './Login.css';
import {Link , useNavigate} from "react-router-dom";
import firebase from "firebase/compat/app";
import {signInWithPopup} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from '../FirebaseAuth'

function Login() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    return (
        <div>
            <section>{
                user ? navigate('/explore'): <SignIn/>
            }</section>
        </div>
    );
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit}
                    className="login-form">
                    <div className="form-group">
                        <input type="email" placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="form-input"/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password"
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
                <div className="home-redirect">
                    <Link to="/"
                        style={
                            {
                                color: "inherit",
                                textDecoration: "inherit"
                            }
                    }>Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
