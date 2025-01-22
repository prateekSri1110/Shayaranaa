import React, { useEffect, useState } from 'react';
import logo from "../images/logo.png";
import './splash.css'; // Import the CSS file for styling

const splash = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500); // Splash screen will be visible for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <img src={logo} width={300} alt='Shayarana'/>
    </div>
  );
};

export default splash;
