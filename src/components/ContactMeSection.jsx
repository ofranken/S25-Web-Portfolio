import React, { useState } from "react";
import MailIcon from  "../images/icons/contact icons/mail-icon.svg?react";
import GradIcon from  "../images/icons/contact icons/grad-cap-icon.svg?react";
import PhoneIcon from  "../images/icons/contact icons/telephone-icon.svg?react";



function ContactMeSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('https://formspree.io/f/xvgrjbgk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
        } else {
            alert('Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
    }
};

    const copyToClipboard = async (text, type) => {
        try {
            await navigator.clipboard.writeText(text);
            // You can add a toast notification here if you want
            console.log(`${type} copied to clipboard: ${text}`);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <section id="contact-section">
          <section className="contact-section-container">
              <div className="contact-section-content">
                  <div className="contact-header">
                      <h2 className="section-title">Contact Me</h2>
                            <p id="professional-instruction">Click the buttons to copy my email or phone number to your clipboard.</p>
                  </div>

                  <div className="contact-info-grid">
                      <div 
                          id="school-email-card" 
                          className="contact-info-card contact-clickable"
                          onClick={() => copyToClipboard('okf2wm@missouri.edu', 'School email')}
                      >
                        <GradIcon id="grad-icon"/>
                          <span className="contact-text">okf2wm@missouri.edu</span>
                      </div>
                      <div 
                          id="personal-email-card" 
                          className="contact-info-card contact-clickable"
                          onClick={() => copyToClipboard('oliviakfranken@gmail.com', 'Personal email')}
                      >
                          <MailIcon id="mail-icon"/>
                          <span className="contact-text">oliviakfranken@gmail.com</span>
                      </div>
                      <div 
                          id="phone-card" 
                          className="contact-info-card contact-clickable"
                          onClick={() => copyToClipboard('(573) 410-9881', 'Phone number')}
                      >
                        <PhoneIcon id="phone-icon"/>
                          <span className="contact-text">(573) 410-9881</span>
                      </div>
                  </div>

                  <div id="contact-form" className="contact-form">
                      <div className="form-row">
                          <div className="form-group">
                              <input
                                  type="text"
                                  id="first-name"
                                  name="firstName"
                                  className="form-input"
                                  placeholder="First Name *"
                                  value={formData.firstName}
                                  onChange={handleInputChange}
                                  required
                              />
                          </div>
                          <div className="form-group">
                              <input
                                  type="text"
                                  id="last-name"
                                  name="lastName"
                                  className="form-input"
                                  placeholder="Last Name *"
                                  value={formData.lastName}
                                  onChange={handleInputChange}
                                  required
                              />
                          </div>
                      </div>
                      
                      <div className="form-row">
                          <div className="form-group">
                              <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  className="form-input"
                                  placeholder="Email Address *"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required
                              />
                          </div>
                          <div className="form-group">
                              <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  className="form-input"
                                  placeholder="Phone Number"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                              />
                          </div>
                      </div>

                      <div className="form-group">
                          <textarea
                              id="message"
                              name="message"
                              className="form-textarea"
                              placeholder="Your Message *"
                              rows="6"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                          ></textarea>
                      </div>

                      <button type="button" id="submit-button" className="submit-button" onClick={handleSubmit}>
                          Send Message
                      </button>
                  </div>
              </div>
          </section>
        </section>
    );
}

export default ContactMeSection;