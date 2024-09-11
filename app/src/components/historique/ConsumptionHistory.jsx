import React from 'react';
import './Historics.css'
const ConsumptionHistory = () => {
    const consumptionData = [
        { date: '2024-01-01', consumption: 15 },
        { date: '2024-01-02', consumption: 18 },
        // Ajoutez d'autres données selon vos besoins
    ];

    return (
        <div className="history-container">
            <h2>Historique de Consommation</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Consommation (kWh)</th>
                    </tr>
                </thead>
                <tbody>
                    {consumptionData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.consumption}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ConsumptionHistory;