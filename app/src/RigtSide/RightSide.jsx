import React, { useState } from 'react';
import './RightSide.css'; // Assurez-vous d'importer le CSS

const RightSide = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn((prev) => !prev);
    };

    return (
        <div className="toggle-container">
            <label className="toggle-switch">
                <input type="checkbox" checked={isOn } onChange={handleToggle} />
                <span className="slider"></span>
            </label>
            <span className="toggle-label">{isOn ? 'ON' : 'OFF'}</span>
        </div>
    );
};

export default RightSide;