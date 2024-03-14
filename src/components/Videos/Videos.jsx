import {YouTubePlaylist} from "@codesweetly/react-youtube-playlist";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from '../FirebaseAuth'
import {Navigate} from "react-router-dom";
import "./Videos.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Videos() {
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
