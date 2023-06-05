import React from 'react';
import './CookieComponent.css'; 

const CookieComponent = ({ onAccept, onDecline }) => { 
  return (
    <div className={`cookie-component ${CookieComponent ? 'hide' : ''}`}>
      <p>We use cookies to enhance your experience. Do you accept our use of cookies?</p>
      <button onClick={onAccept}>Accept</button>
      <button onClick={onDecline}>Decline</button>
    </div>
  );
}

export default CookieComponent; // Name change
