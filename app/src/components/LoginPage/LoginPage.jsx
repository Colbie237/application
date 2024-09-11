import  { useState } from 'react';
import './LoginPage.css';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importer les icônes d'utilisateur et de cadenas
import photo from '../../imgs/ima.avif';
import { Link } from 'react-router-dom';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Nom d'utilisateur et mot de passe par défaut
        const defaultUsername = 'user';
        const defaultPassword = 'password';

        if (username === defaultUsername && password === defaultPassword) {
            alert('Connexion réussie');
        } else {
            setError('Nom d’utilisateur ou mot de passe incorrect');
        }
    };

    return (
        <div className="login-container">
            <div className="image-section">
                <img src={photo} alt="Installations photovoltaïques" />
            </div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <p className='centre'>Connexion</p>
                    <div className="form-group">
                        <label htmlFor="username">
                            <FaEnvelope  className="icon" /> Email de l utilisateur
                        </label>
                        <input
                            type="email"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className='Name'
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
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="login-button"> <Link to="/Dashboard " className='u'>Se connecter </Link></button>
                    <br />
                    Vous n avez pas de compte ? <Link to="/Register ">Inscrivez-vous ici</Link>
                    <p className='p'> </p>
                    <a href="">Mot de passe oublié ?</a>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;