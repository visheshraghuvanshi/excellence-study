import {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/"
                    style={
                        {
                            color: 'inherit',
                            textDecoration: 'inherit'
                        }
                }>
                    <div className="logo">
                        <Logo/>
                    </div>
                </Link>
                <div className="menu-icon"
                    onClick={handleShowNavbar}>
                    <Hamburger/>
                </div>
                <div className={
                    `nav-elements  ${
                        showNavbar && 'active'
                    }`
                }>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/articles">Articles</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const Hamburger = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24">
        <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
            <rect id="Rectangle_3" data-name="Rectangle 3" width="42" height="4" rx="2" transform="translate(304 47)" fill="#574c4c"/>
            <rect id="Rectangle_5" data-name="Rectangle 5" width="42" height="4" rx="2" transform="translate(304 67)" fill="#574c4c"/>
            <rect id="Rectangle_4" data-name="Rectangle 4" width="52" height="4" rx="2" transform="translate(294 57)" fill="#574c4c"/>
        </g>
    </svg>
);

const Logo = () => (
    <div className="logo-container">
        <div className="book-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
            </svg>
        </div>
        <span className="logo-text">Excellence Study</span>
    </div>
);


export default Navbar;
