import React, { useEffect } from 'react'
import {  BrowserRouter as Router,  Routes,  Route, useLocation} from "react-router-dom";
import Doacao from './components/Doacao';
import Footer from './components/Footer';
import Header from './components/Header';
import Paginaprograma from './components/Paginaprograma';
import Paz from './components/Paz';
import Sobrenos from './components/Sobrenos';
import Zoom from './components/Zoon';
import Colaboradores from './components/Colaboradores';
import Home from './pages/Home';
import Equipe from './pages/Equipe';
import Downloads from './components/Downloads';
import Download from './pages/Downloads';
import Perguntas from './components/Perguntas';
import Nos from './components/Nos';
import Pagenos from './pages/Nos';
import Programa from './components/Programa';
import Conheca from './components/Conheca';
import ConhecaPrograma from './pages/Conheca';
import Locais from './components/Locais';






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
        <Route path="/doacao" element={<Doacao/>} />
        <Route path="/paz" element={<Paz/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/equipe" element={<Equipe/>} />
        <Route path="/downloads" element={<Download/>} />
        <Route path="/perguntas" element={<Perguntas/>} />
        <Route path="/nos" element={<Pagenos/>} />
        <Route path="/programa" element={<Programa/>} />
        <Route path="/conheca" element={<ConhecaPrograma/>} />
        <Route path="/locais" element={<Locais/>} />
        
        
        
           
       
      </Routes>
    </Router>
  );
};

export default MyRoutes;