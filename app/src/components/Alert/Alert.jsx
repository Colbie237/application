import React, { useState } from 'react';
import './Alert.css';

const AlertsNotifications = () => {
    const [alerts, setAlerts] = useState([
        { id: 1, message: "Baisse de performance détectée sur le panneau 1.", type: "performance" },
        { id: 2, message: "Dysfonctionnement du panneau 2.", type: "performance" },
        { id: 3, message: "Entretien préventif prévu le 15 septembre.", type: "maintenance" },
        { id: 4, message: "Vérification des connexions à réaliser.", type: "maintenance" },
        // Ajoutez d'autres alertes au besoin
    ]);

    return (
        <div className="alerts-container">
            <h2>Alertes et Notifications</h2>
            <div className="alerts-section">
                <h3>Alertes de Performance</h3>
                {alerts.filter(alert => alert.type === "performance").map(alert => (
                    <div key={alert.id} className="alert performance-alert">
                        {alert.message}
                    </div>
                ))}
            </div>
            <div className="alerts-section">
                <h3>Maintenance Préventive</h3>
                {alerts.filter(alert => alert.type === "maintenance").map(alert => (
                    <div key={alert.id} className="alert maintenance-alert">
                        {alert.message}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlertsNotifications;