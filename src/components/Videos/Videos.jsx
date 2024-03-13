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
        apiKey: import.meta.env.VITE_APP_API_KEY,
        authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_APP_PROJECT_ID,
        storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_APP_ID,
        measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
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
                <YouTubePlaylist apiKey={import.meta.env.VITE_APP_YT_API_KEY} playlistId={import.meta.env.VITE_APP_YT_PLAYLISTID} uniqueName="DSA PLAYLIST"/>
            </div>
            <Footer/>
        </>
    );
}
