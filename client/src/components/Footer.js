import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Handle contact button click
    // Implement logic for displaying the contact form or navigating to the contact page
    // Consider adding contact form for future development 
  };

  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        
        <h4>
          Need Support? Reach out to us below!
        </h4>
        <button className="btn btn-primary" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </footer>
  );
};

export default Footer;
