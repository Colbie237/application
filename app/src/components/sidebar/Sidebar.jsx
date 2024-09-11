import React from 'react';
import './Sidebar.css';
import { FaBolt, FaThermometerHalf, FaWater, FaPlug, FaChartLine } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h2>Éléments</h2>
      <div className="sidebar-item">
        <FaBolt className="sidebar-icon" />
      
      </div>
      <div className="sidebar-item">
        <FaPlug className="sidebar-icon" />
       
      </div>
      <div className="sidebar-item">
        <FaChartLine className="sidebar-icon" />
      
      </div>
      <div className="sidebar-item">
        <FaThermometerHalf className="sidebar-icon" />
 
      </div>
      <div className="sidebar-item">
        <FaWater className="sidebar-icon" />
      
      </div>
    </div>
  );
};

export default Sidebar;