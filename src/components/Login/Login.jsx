import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import './Login.css';
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { signInWithPopup } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import Course from "../../assets/courses.png";
import Article from "../../assets/article.png";
import Video from "../../assets/video.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../FirebaseAuth'

function Explore() {
    return (
        <>
            <Navbar />
            <section className="features-section login-container">
                <div className="feature-cards">
                    <Link
                        to="/articles"
                        style={{
                            color: "inherit",
                            textDecoration: "inherit"
                        }}
                    >
                        <div className="feature-card">
                            <img src={Article} alt="Article Icon" />
                            <h3>Articles</h3>
                            <p>
                                Access a vast library of educational articles written by experts.
                            </p>
                        </div>
                    </Link>
                    <Link
                        to="/courses"
                        style={{
                            color: "inherit",
                            textDecoration: "inherit"
                        }}
                    >
                        <div className="feature-card">
                            <img src={Course} alt="Course Icon" />
                            <h3>Courses</h3>
                            <p>
                                Enroll in our comprehensive online courses and learn at your own pace.
                            </p>
                        </div>
                    </Link>
                    <Link
                        to="/videos"
                        style={{
                            color: "inherit",
                            textDecoration: "inherit"
                        }}
                    >
                        <div className="feature-card">
                            <img src={Video} alt="Video Icon" />
                            <h3>Videos</h3>
                            <p>Explore our collection of engaging educational videos.</p>
                        </div>
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    );
}

function Login() {
    const [user] = useAuthState(auth);

    return (
        <div>
            <section>{user ? <Explore /> : <SignIn />}</section>
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
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <div className="separator">or</div>
                <center><button
                    type="button"
                    onClick={signInWithGoogle}
                    className="google-sign-in"
                >
                    <FaGoogle />
                    Sign in with Google
                </button></center>
            </div>
        </div>
    );
}

export default Login;