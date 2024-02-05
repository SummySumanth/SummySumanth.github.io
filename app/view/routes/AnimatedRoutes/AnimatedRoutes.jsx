import React from 'react';
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ContactUs from '../../pages/ContactUs/ContactUs';
import Welcome from '../../pages/welcome/welcome';
import App from '../../pages/App/App';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Welcome />} />
        <Route path="/app" element={<App />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<h1>404 Uh Oh! it seems nothing here</h1>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
