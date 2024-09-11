import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideOp from './components/Sideop/SideOp'; // Ajustez le chemin selon votre structure
import Profil from '../src/components/profil/Profil'; // Assurez-vous d'avoir cette page
import Alerte from './components/Alert/Alert'; // Assurez-vous d'avoir cette page
import Historique from './components/historique/ConsumptionHistory'; // Assurez-vous d'avoir cette page
import Dashboard from './components/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Login from'../src/components/LoginPage/LoginPage'
import Register from './components/register/Register'
const App = () => {
  return (
    <Router>
     
      <Routes>
      <Route path="/" element={ <Login />} />
      <Route path="/SideOp" element={ <SideOp/>} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Register" element={<Register />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/alerte" element={<Alerte />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        
      </Routes>
    </Router>
  );
};

export default App;