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
import Register from './pages/Register';
import Login from './pages/login';
import {Navigate} from 'react-router-dom';
import CreateApplication from './pages/CreateApplication';
import UpdateApplication from './pages/UpdateApplication';
import {Toaster} from 'react-hot-toast';

function App() {
  const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
  }
  return (
    <BrowserRouter>
    <Navbar />
    <Toaster />
    <Routes>
      <Route path = "/" element={<Login />} />
      <Route path ="/Dashboard" element={
        <PrivateRoute> <Dashboard /> </PrivateRoute>} />
      <Route path = "/MyInformation" element={<PrivateRoute>
        <MyInformation />
      </PrivateRoute>} />
      <Route path = "/CRSCalculator" element={<PrivateRoute>
        <CRSCalculator />
      </PrivateRoute>} />
      <Route path = "/RecommendedStreams" element={<PrivateRoute>
        <RecommendedStreams />
      </PrivateRoute>} />
      <Route path= "/Register" element={<Register />} />
      <Route path= "/login" element ={<Login />} />
      <Route path= "/createApplication" element={<PrivateRoute>
        <CreateApplication />
      </PrivateRoute>} />
      <Route path= "/updateApplication" element={<PrivateRoute>
        <UpdateApplication />
      </PrivateRoute>} />
    </Routes>
    </BrowserRouter>
  );
}
 export default App;