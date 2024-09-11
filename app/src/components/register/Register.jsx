import  { useState } from 'react';
import './Register.css';
import { FaUser, FaLock, FaPhone, FaEnvelope } from 'react-icons/fa'; 
import photo from '../../imgs/imagesolaire1.jpg'; 
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            return;
        }
        alert('Inscription réussie');
    };

    return (
        <div className="register-container">
            <div className="image-section1">
                <img src={photo} alt="Inscription" />
            </div>
            <div className="register-form">
            <p className='centre'>Inscription</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">
                            <FaUser className="icon" /> Nom d utilisateur
                        </label>
                        <input
                            type=""
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <FaEnvelope className="icon" /> E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">
                            <FaPhone className="icon" /> Téléphone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            <FaLock className="icon" /> Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">
                            <FaLock className="icon" /> Confirmer le mot de passe
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="register-button">S inscrire</button>
                    
                   ous avez déjà un compte ? <Link to="/login">Connectez-vous ici</Link>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;