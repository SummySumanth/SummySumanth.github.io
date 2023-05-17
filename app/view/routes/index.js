
import React, { useEffect, useState} from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Welcome from '../pages/welcome/welcome.jsx';
// import TestPage from '../pages/testPage/testPage';

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<Welcome />}/>
      {/* <Route path="/test" element={<TestPage />} /> */}
    </Routes>
  )
}

export default AppRoutes