import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LogIn.scss';
import ErrorMessage from '../LogIn';

class LogIn extends Component {
    render(){
        return <div className="logIn__container">
            <h1>Inicia sesión</h1>
            <form action="/signup" method="post">
            <label htmlFor="user-name"/>
            <input type="text" id="user-name" placeholder="Tu dirección de email o nombre de usuario" name="user-name"/>
            <label htmlFor="password"/>
            <input type="text" id="password" placeholder="Contraseña" name="password"/>
            <FontAwesomeIcon
            icon="eye-slash" />
            
            <label htmlFor="remember">
            <input type="checkbox" id="remember" name="remember"/>
            Recuérdame
            </label>
        
            </form>
           
        </div>
    }
}

export default LogIn;