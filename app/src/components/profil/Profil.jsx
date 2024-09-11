import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Profil.css'; // Assurez-vous que ce fichier CSS existe

const Profil = () => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="slide"
    >
      <div className="profil-container">
        <h1>Page de Profil</h1>
        {/* Contenu de la page de profil ici */}
      </div>
    </CSSTransition>
  );
};

export default Profil;