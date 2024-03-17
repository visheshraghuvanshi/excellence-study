import Articles from "./components/Articles/Articles";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Videos from "./components/Videos/Videos";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";

function App() {

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/"
                        element={<Home/>}/>
                    <Route path="/login"
                        element={<Login/>}/>
                    <Route path="/articles"
                        element={<Articles/>}/>
                    <Route path="/videos"
                        element={<Videos/>}/>
                    <Route path="/courses"
                        element={<Courses/>}/>
                    <Route path="/about"
                        element={<About/>}/>
                    <Route path="*"
                        element={
                            <Navigate
                        to="/"/>
                        }/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
