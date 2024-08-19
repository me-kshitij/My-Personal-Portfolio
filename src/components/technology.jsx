import React from 'react';
import './technology.css'; // Import the CSS file for styling

const technologies = () => {
    const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Talwind css', 'Bootstrap', 'Figma',];

    const technologies1 = ['Node.js', 'Express js', 'MongoDb', 'SQL'];
    const technologies2 = ['Python', 'Java', 'C'];
    const technologies3 = ['Git', 'Github', 'VS Code', 'Postman', 'Netbeans',];
    return (<>
    <h1>Technology</h1>
            <div className="technologys">
               
        <div className="tech-box">
            <h2>Frontend Technologies</h2>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index} className="tech-item">
                        {tech}
                    </li>
                ))}
            </ul>
        </div>

        <div className="tech-box">
            <h2>Backend Technologies</h2>
            <ul>
                {technologies1.map((tech, index) => (
                    <li key={index} className="tech-item">
                        {tech}
                    </li>
                ))}
            </ul>
        </div>

        <div className="tech-box">
            <h2>Programming Langauges</h2>
            <ul>
                {technologies2.map((tech, index) => (
                    <li key={index} className="tech-item">
                        {tech}
                    </li>
                ))}
            </ul>
        </div>

        <div className="tech-box">
            <h2>Others</h2>
            <ul>
                {technologies3.map((tech, index) => (
                    <li key={index} className="tech-item">
                        {tech}
                    </li>
                ))}
            </ul>
        </div>
             
        </div>
    </>
    );
};

export default technologies;
