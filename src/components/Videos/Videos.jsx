import {YouTubePlaylist} from "@codesweetly/react-youtube-playlist";
import {useAuthState} from "react-firebase-hooks/auth";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {Navigate} from "react-router-dom";
import "./Videos.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Videos() {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [user] = useAuthState(auth);

    if (!user) {
        return <Navigate to="/login"/>;
    }
    return (
        <>
            <Navbar/>
            <div className="playlist">
                <YouTubePlaylist apiKey={process.env.REACT_APP_YT_API_KEY} playlistId={process.env.REACT_APP_YT_PLAYLISTID} uniqueName="DSA PLAYLIST"/>
            </div>
            <Footer/>
        </>
    );
}
