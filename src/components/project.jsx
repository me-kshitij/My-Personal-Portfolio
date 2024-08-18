import React from 'react';
import './project.css'; // Make sure to create this CSS file

const Project = () => {
    const projects = [
        {
            title: 'Netflix Clone',
            description: 'A Netflix clone is a web application that replicates the core features of Netflix, including user authentication, a searchable media library, and streaming functionality. It allows users to browse through a collection of movies and TV shows',
            imageUrl: 'https://user-images.githubusercontent.com/108225877/181223817-ba7729b4-92a7-49b7-b456-cc9b74c6aec7.png', // Replace with actual image URL
        },
        {
            title: 'Spotify Clone',
            description: 'A Spotify clone is a web application that replicates Spotify core features, including music streaming, playlist management, and user authentication. Users can browse a music library, create playlists, and receive personalized recommendations',
            imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.20v4O66VjOMKxfbPssAH_AHaEB&pid=Api&P=0&h=180', // Replace with actual image URL
        },
        {
            title: 'Food Delivery',
            description: 'A food delivery app allows users to browse local restaurants, place orders, and have food delivered to their doorstep. It features a user-friendly interface for searching menus',
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.IYatP0hfd4itM89tPY-NDgHaEK&pid=Api&P=0&h=180', // Replace with actual image URL
        }
    ];

    return (
        <div className="project-container">
            <h1 className="project-title">My Projects</h1>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <h2 className="project-card-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
