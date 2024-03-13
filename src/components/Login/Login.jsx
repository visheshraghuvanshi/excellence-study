import {Link} from "react-router-dom";
import firebase from "firebase/compat/app";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";
import "./Login.css";
import Course from "../../assets/courses.png";
import Article from "../../assets/article.png";
import Video from "../../assets/video.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import {useAuthState} from "react-firebase-hooks/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_APP_ID,
    measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Explore() {
    return (
        <>
            <Navbar/>
            <section className="features-section login-container">
                <div className="feature-cards">
                    <Link to="/articles"
                        style={
                            {
                                color: "inherit",
                                textDecoration: "inherit"
                            }
                    }>
                        <div className="feature-card">
                            <img src={Article}
                                alt="Article Icon"/>
                            <h3>Articles</h3>
                            <p>
                                Access a vast library of educational articles written by
                                                experts.
                            </p>
                        </div>
                    </Link>
                    <Link to="/courses"
                        style={
                            {
                                color: "inherit",
                                textDecoration: "inherit"
                            }
                    }>
                        <div className="feature-card">
                            <img src={Course}
                                alt="Course Icon"/>
                            <h3>Courses</h3>
                            <p>
                                Enroll in our comprehensive online courses and learn at your own
                                                pace.
                            </p>
                        </div>
                    </Link>
                    <Link to="/videos"
                        style={
                            {
                                color: "inherit",
                                textDecoration: "inherit"
                            }
                    }>
                        <div className="feature-card">
                            <img src={Video}
                                alt="Video Icon"/>
                            <h3>Videos</h3>
                            <p>Explore our collection of engaging educational videos.</p>
                        </div>
                    </Link>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default function Login() {
    const [user] = useAuthState(auth);

    return (
        <div>
            <section>{
                user ? <Explore/>: <SignIn/>
            }</section>
        </div>
    );
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        signInWithPopup(auth, provider); // Assuming you have signInWithPopup function
    };

    return (
        <div className="sign-in-form login-container">
            <h2>Log In</h2>
            <form>
                <label htmlFor="email">
                    Email:
                    <input type="email" id="email" required/>
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" id="password" required/>
                </label>
                <button type="submit">Log In</button>
            </form>
            <button className="google-sign-in"
                onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </div>
    );
}
