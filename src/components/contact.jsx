import React, { useState } from 'react';
import './contact.css'; // Ensure this CSS file is created

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Message sent!');
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Me</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="contact-label">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input"
                    required
                />
                
                <label htmlFor="email" className="contact-label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                    required
                />
                
                <label htmlFor="message" className="contact-label">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-textarea"
                    rows="5"
                    required
                ></textarea>
                
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
