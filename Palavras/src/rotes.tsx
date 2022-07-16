import React, { useEffect } from 'react'
import {  BrowserRouter as Router,  Routes,  Route, useLocation} from "react-router-dom";
import Header from './components/Header';
import Paginaprograma from './components/Paginaprograma';
import Sobrenos from './components/Sobrenos';
import Zoom from './components/Zoon';
import Home from './pages/Home';



const MyRoutes: React.FC = () => {

  

  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  return (
    
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobrenos" element={<Sobrenos/>} />
        <Route path="/zoom" element={<Zoom/>} />
       
    
       
       
      </Routes>
    </Router>
  );
};

export default MyRoutes;