import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:no1vishesh1@gmail.com?subject=Message from ${name} (${email})&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
    <Navbar />
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Email: support@vidyabytes.com</p>
        <p>Phone: +911234567890</p>
        <p>Address: 123 Main Street, Delhi, India</p>
      </div>
      <h2>Send us a message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
