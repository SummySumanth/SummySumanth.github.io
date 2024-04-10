import { useState, useEffect } from 'react';

const useScreenDetails = () => {
  const [screenDetails, setScreenDetails] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenDetails({
        screenWidth: window.innerWidth,
        deviceType: window.innerWidth < 1183 ? 'tabletOrLower' : 'desktop',
      });
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures effect only runs once

  return screenDetails;
};

export default useScreenDetails;
