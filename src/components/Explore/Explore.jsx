import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Course from "../../assets/courses.png";
import Article from "../../assets/article.png";
import Video from "../../assets/video.png";
import {Link} from "react-router-dom";
import './Explore.css';

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
                                Access a vast library of educational articles written by experts.
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
                                Enroll in our comprehensive online courses and learn at your own pace.
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
export default Explore;