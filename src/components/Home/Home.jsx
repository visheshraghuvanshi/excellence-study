import './Home.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Course from "../../assets/courses.png";
import Article from "../../assets/article.png";
import Video from "../../assets/video.png";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar/>
            <main className="main-content">
                <section className="hero-section">
                    <h1>Welcome to Excellence Study</h1>
                    <p>Unlock your potential with our comprehensive online learning platform.</p>
                    <Link to="/login">
                        <button className="cta-button">Get Started</button>
                    </Link>
                </section>

                <section className="features-section">
                    <h2>Our Features</h2>
                    <div className="feature-cards">
                        <div className="feature-card">
                            <img src={Article}
                                alt="Article Icon"/>
                            <h3>Articles</h3>
                            <p>Access a vast library of educational articles written by experts.</p>
                        </div>
                        <div className="feature-card">
                            <img src={Course}
                                alt="Course Icon"/>
                            <h3>Courses</h3>
                            <p>Enroll in our comprehensive online courses and learn at your own pace.</p>
                        </div>
                        <div className="feature-card">
                            <img src={Video}
                                alt="Video Icon"/>
                            <h3>Videos</h3>
                            <p>Explore our collection of engaging educational videos.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;
