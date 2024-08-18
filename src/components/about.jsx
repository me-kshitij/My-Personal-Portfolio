import React from 'react';
import './about.css'; // Ensure this CSS file is created

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
                <img src="../public/image/dp2.jpg" alt="Profile" className="about-image" />
                <p className="about-text">
                    Hello! I'm Pramish, a passionate web developer with experience in creating dynamic and responsive web applications. I specialize in technologies such as React, Node.js, and modern frontend frameworks. My goal is to build user-friendly and innovative solutions that solve real-world problems.
                </p>
                <p className="about-text">
                    With a strong background in both frontend and backend development, I enjoy tackling challenges and learning new technologies. When I'm not coding, you can find me exploring the latest tech trends or working on personal projects.
                </p>
                <p className="contactme">
                    Contact me in on 
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </p>
            </div>
        </div>
    );
};

export default About;
