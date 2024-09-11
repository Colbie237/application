import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import './SideOp.css';

const SideOp = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const navigate = useNavigate(); // Initialiser useNavigate

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString(undefined, options));
    };

    updateTime(); // Met à jour immédiatement
    const intervalId = setInterval(updateTime, 60000); // Met à jour chaque minute

    return () => clearInterval(intervalId); // Nettoyage de l'intervalle
  }, []);

  const handleIconClick = (path) => {
    navigate(path); // Naviguer vers la page correspondante
  };

  return (
    <div className="sideop-container">
      <div className="heure">{currentTime}</div>
      <div className="date">{currentDate}</div>
      <div className="tmp">°C</div>

      <div className="icons">
        <div className="icon" onClick={() => handleIconClick('/profil')}>👤</div>
        <div className="icon" onClick={() => handleIconClick('/alerte')}>🔔</div>
        <div className="icon" onClick={() => handleIconClick('/historique')}>📜</div>
      </div>
    </div>
  );
};

export default SideOp;