import './Courses.css';
import CourseCard from './CourseCard';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import WebDevImage from "../../assets/intro-to-web-dev.png";
import ReactFundamentalsImage from "../../assets/react-fundamentals.png";
import NodeAndExpressImage from "../../assets/node-js-and-express.png"

const courses = [
    {
        id: 1,
        title: 'Introduction to Web Development',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build stunning websites.',
        price: 49.99,
        image: WebDevImage
    }, {
        id: 2,
        title: 'React Fundamentals',
        description: 'Master the fundamentals of React and build modern web applications.',
        price: 79.99,
        image: ReactFundamentalsImage
    }, {
        id: 3,
        title: 'Node.js and Express',
        description: 'Learn to build server-side applications with Node.js and Express.',
        price: 59.99,
        image: NodeAndExpressImage
    },
];

function Courses() {
    return (
        <>
        <Navbar />
        <div className="Courses">
            <h1>Our Courses</h1>
            <div className="course-grid">
                {
                courses.map((course) => (
                    <CourseCard key={
                            course.id
                        }
                        course={course}/>
                ))
            } </div>
        </div>
        <Footer />
        </>
    );
}

export default Courses;
