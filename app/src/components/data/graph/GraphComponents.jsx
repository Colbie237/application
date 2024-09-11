// src/components/GraphComponent.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import '../../maindash/Maindash'
const GraphComponent = ({ data }) => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Remplacez par vos données
    datasets: [
      {
        label: data.label,
        data: [data.value, data.value - 10, data.value + 5, data.value + 15, data.value - 5], // Remplacez par vos données
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <div className="graph">
      <h2>{data.label} Graph</h2>
      <Line data={chartData} />
    </div>
  );
};

export default GraphComponent;