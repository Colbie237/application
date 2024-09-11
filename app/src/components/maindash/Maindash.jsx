import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./MainDash.css";
import RightSide from "../../RigtSide/RightSide";
import { CircularProgress, Typography } from '@mui/material';

const MainDas = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  // Exemple de données pour les cartes
  const data = [
    { label: 'Température', value: 75, max: 100, unit: '°C', chartData: [
      { time: '08:00', value: 22 },
      { time: '12:00', value: 25 },
      { time: '16:00', value: 28 },
      { time: '20:00', value: 24 },
      { time: '24:00', value: 20 },
    ]},
    { label: 'Humidité', value: 60, max: 100, unit: '%', chartData: [
      { time: '08:00', value: 60 },
      { time: '12:00', value: 65 },
      { time: '16:00', value: 70 },
      { time: '20:00', value: 68 },
      { time: '24:00', value: 65 },
    ]},
    { label: 'Énergie Consommée', value: 3000, max: 5000, unit: 'kWh', chartData: [
      { time: '08:00', value: 800 },
      { time: '12:00', value: 1200 },
      { time: '16:00', value: 1600 },
      { time: '20:00', value: 1400 },
      { time: '24:00', value: 600 },
    ]},
    { label: 'Tension', value: 220, max: 240, unit: 'V', chartData: [
      { time: '08:00', value: 220 },
      { time: '12:00', value: 225 },
      { time: '16:00', value: 230 },
      { time: '20:00', value: 240 },
      { time: '24:00', value: 210 },
    ]},
    { label: 'Énergie Produite', value: 2500, max: 5000, unit: 'kWh', chartData: [
      { time: '08:00', value: 1000 },
      { time: '12:00', value: 1500 },
      { time: '16:00', value: 2000 },
      { time: '20:00', value: 1800 },
      { time: '24:00', value: 800 },
    ]},
    { label: 'Pourcentage de Batterie', value: 80, max: 100, unit: '%', chartData: [
      { time: '08:00', value: 80 },
      { time: '12:00', value: 78 },
      { time: '16:00', value: 75 },
      { time: '20:00', value: 77 },
      { time: '24:00', value: 76 },
    ]},
  ];

  // Exemple de données pour le graphique principal
  const chartData = [
    { time: '08:00', temperature: 22, energyProduced: 1000, energyConsumed: 800, tension: 220 },
    { time: '12:00', temperature: 25, energyProduced: 1500, energyConsumed: 1200, tension: 230 },
    { time: '16:00', temperature: 28, energyProduced: 2000, energyConsumed: 1600, tension: 240 },
    { time: '20:00', temperature: 24, energyProduced: 1800, energyConsumed: 1400, tension: 225 },
    { time: '24:00', temperature: 20, energyProduced: 800, energyConsumed: 600, tension: 210 },
  ];

  const handleCardClick = (element) => {
    setSelectedElement(element);
  };

  return (
    <div className="main-container">
      <br /><br />
      <div className="right-side">
        <RightSide />
        <RightSide />
      </div>

      <div className="content-container">
        {selectedElement ? (
          <div className="chart-container">
            <h2>{selectedElement.label}</h2>
            <LineChart width={600} height={300} data={selectedElement.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
          </div>
        ) : (
          <div className="cards-container">
            {data.map((item) => (
              <div className="card" key={item.label} onClick={() => handleCardClick(item)}>
                <Typography variant="h6" gutterBottom>
                  {item.label}
                </Typography>
                <CircularProgress
                  variant="determinate"
                  value={(item.value / item.max) * 100}
                  size={80}
                  style={{ position: 'relative' }}
                />
                <Typography variant="h4" align="center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  {((item.value / item.max) * 100).toFixed(0)}%
                </Typography>
                <Typography variant="body2" align="center">
                  {item.value} {item.unit}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="chart-row">
        <div className="chart-container">
          <LineChart width={600} height={250} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="energyProduced" stroke="#82ca9d" />
            <Line type="monotone" dataKey="energyConsumed" stroke="#8884d8" />
            <Line type="monotone" dataKey="tension" stroke="#ff7300" />
            <Line type="monotone" dataKey="temperature" stroke="#ff0000" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default MainDas;