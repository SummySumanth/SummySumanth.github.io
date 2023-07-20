import React from 'react';
import {
  Route,
  Routes,
  Navigate,
  useLocation,
} from 'react-router-dom';
import ContactUs from '../../pages/ContactUs/ContactUs';
import Welcome from '../../pages/welcome/welcome';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="*" element={<h1>404 Uh Oh! it seems nothing here</h1>} />
    </Routes>
  );
}

export default AnimatedRoutes;
