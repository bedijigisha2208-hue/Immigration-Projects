import {BrowserRouter, Routes , Route} from "react-router-dom";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar'
import MyInformation from './pages/MyInformation';
import CRSCalculator from './pages/CRSCalculator';
import RecommendedStreams from './pages/RecommendedStreams';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = "/" element={< Dashboard />} />
      <Route path = "/MyInformation" element={<MyInformation />} />
      <Route path = "/CRSCalculator" element={<CRSCalculator />} />
      <Route path = "/RecommendedStreams" element={<RecommendedStreams />} />
    </Routes>
    </BrowserRouter>
  );
}
 export default App;