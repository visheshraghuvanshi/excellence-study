import * as React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Home() {

  return (
    <div>
      <Link to="/blogs">
        <button>Articles</button>  
      </Link>

      <Link to="/videos">
        <button>Videos</button>
      </Link>

      <Link to="/courses"> 
        <button>Courses</button>
      </Link>
    </div>
  );
}

export default function Login() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <section>{user ? <Home /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
}
