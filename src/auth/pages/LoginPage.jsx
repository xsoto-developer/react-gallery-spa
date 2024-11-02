import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './LoginPage.css';

export const LoginPage = () => {

    const { login } = useContext(AuthContext)
    const navegate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onlogin = (event) => {
        event.preventDefault();
        if (!username && !password){
            setError("'Por favor, complete todos los campos");
            return;
        }

        if (username !=='demo_user' || password !=='demo_pass'){
            setError("'Por favor, ingrese los datos correctos");
            return;
        }
        setError('');

        localStorage.setItem('username', username)
        const lastPath = localStorage.getItem('lastPath') || '/'
        login(username)

        console.log("login button clicked")
        navegate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={onlogin}>
                <h2 className="login-title">Iniciar sesión</h2>
                {error && <p className='login-error'>{error}</p>}
                <input 
                    type="text" 
                    className="login-input" 
                    placeholder="Usuario: demo_user" 
                    value={username}
                    onChange={(e) =>setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    className="login-input" 
                    placeholder="Contraseña: demo_pass" 
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                />
                <button type="submit" className="login-button">Ingresar</button>
            </form>
        </div>
    )
}
