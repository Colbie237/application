import React from 'react';
import './Historics.css'
const ProductionHistory = () => {
    const productionData = [
        { date: '2024-01-01', production: 20 },
        { date: '2024-01-02', production: 25 },
        // Ajoutez d'autres données selon vos besoins
    ];

    return (
        <div className="history-container">
            <h2>Historique de Production</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Production (kWh)</th>
                    </tr>
                </thead>
                <tbody>
                    {productionData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.production}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductionHistory;