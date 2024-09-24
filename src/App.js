import React from 'react'

import {Routes, Route } from "react-router-dom";
import Flight from './pages/Flight';
import Hotels from './pages/Hotels';
import Navbar from './components/Navbar';
import Test from './Test';

function App() {
  return (
    <div>
    {/* <Navbar/>
      <Routes>
    <Route path="/" element={<Flight />}>
      </Route>
    <Route path="/hotels" element={<Hotels />}>
    </Route>
  </Routes> */}
  <Test/>
    </div>
  );
}

export default App;