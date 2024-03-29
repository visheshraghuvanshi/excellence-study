import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import TeamMember1 from '../../assets/team-member-1.svg'
import TeamMember2 from '../../assets/team-member-2.svg'
import './About.css';

const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-content">
        <p>
          Welcome to Excellence Study, a cutting-edge educational platform designed to revolutionize the way you learn and grow. We are a team of two passionate individuals dedicated to providing high-quality educational resources and empowering learners of all ages to unlock their full potential.
        </p>
        <h2 className="team-heading">Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={TeamMember1} alt="Vishesh Kumar Raghuvanshi" className="team-member-image" />
            <h3 className="team-member-name">Vishesh Kumar Raghuvanshi</h3>
            <p className="team-member-role">Co-Founder &amp; Lead Developer</p>
            <p className="team-member-bio">
              Vishesh is a Computer Science Engineering student at Sushila Devi Bansal College of Engineering. With a passion for technology and a drive for excellence, he has been the driving force behind Excellence Study's innovative platform. His expertise in software development and user experience design has played a pivotal role in creating a seamless and engaging learning environment.
            </p>
            <p className="team-member-links">
              <a href="https://github.com/visheshraghuvanshi" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/visheshraghuvanshi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
          <div className="team-member">
            <img src={TeamMember2} alt="Ankit Singh" className="team-member-image" />
            <h3 className="team-member-name">Ankit Singh</h3>
            <p className="team-member-role">Co-Founder &amp; Educational Content Lead</p>
            <p className="team-member-bio">
              Ankit is a Computer Science Engineering student at Sushila Devi Bansal College of Engineering. His dedication to education and his deep understanding of learning methodologies have been instrumental in curating Excellence Study's comprehensive and engaging educational content. Ankit's extensive experience in the field of education and his commitment to student success have shaped the platform's innovative approach to learning.
            </p>
            <p className="team-member-links">
              <a href="https://github.com/ankitoid" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/ankits25/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
        <h2 className="mission-heading">Our Mission</h2>
        <p className="mission-statement">
          At Excellence Study, our mission is to empower learners of all ages and backgrounds by providing accessible, high-quality educational resources tailored to their unique needs and learning styles. We believe that education is the cornerstone of personal growth and societal progress, and we are committed to creating an inclusive and supportive learning environment that fosters curiosity, critical thinking, and lifelong learning.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;