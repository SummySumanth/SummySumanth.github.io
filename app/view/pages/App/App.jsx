import React from 'react';
import { Link, Route, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import BrandLogo from '../../components/brandLogo/BrandLogo';
import './App.css';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';

function App() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      
      
      <Outlet />
    </motion.div>
  );
}

export default App;
