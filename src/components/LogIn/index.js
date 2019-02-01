import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LogIn.scss';

class LogIn extends Component {
    render(){
        return <div>
            <h1>Inicia sesión</h1>
            <form action="/signup" method="post">
            <label htmlFor="user-name"/>
            <input type="text" id="user-name" placeholder="Tu dirección de email o nombre de usuario" name="user-name"/>
            <label htmlFor="password"/>
            <input type="text" id="password" placeholder="Contraseña" name="password"/>
            <FontAwesomeIcon
            icon="faEyeSlash" />
            </form>
           
        </div>
    }
}

export default LogIn;