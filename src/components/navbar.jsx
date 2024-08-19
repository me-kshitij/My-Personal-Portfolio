import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure you have a CSS file for styling

const Navbar = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);
    };

    return (
        <div>
            <nav>
                <div className='logo'>
                    {/* <img src="../public/image/logo-p.jpg" alt="Logo" /> */}
                    <h2>Kshitij</h2>
                </div>
                <ul className='first'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                    <li><Link to="/qualifications">Qualifications</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <li className='phn' onClick={handleClick}><i className="fa-solid fa-bars"></i></li>
            </nav>
            {isShown && (
                <ul className='second'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
