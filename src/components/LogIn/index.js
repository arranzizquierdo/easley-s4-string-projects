import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LogIn.scss';
import ErrorMessage from '../ErrorMessage';

class LogIn extends Component {
  render() {
    return (
      <div className="logIn__container">
        <h1 className="logIn__title">Inicia sesión</h1>
        <form className="logIn__form" action="/signup" method="post">
          <div className="input-icon__container">
            <label htmlFor="user-name" />
            <input
              type="text"
              id="user-name"
              placeholder="Tu dirección de email o nombre de usuario"
              name="user-name"
              className="logIn__input"
            />
          </div>
          <div className="input-icon__container">
            <label htmlFor="password" />
            <input
              type="text"
              id="password"
              placeholder="Contraseña"
              name="password"
              className="logIn__input"
            />
            <FontAwesomeIcon icon="eye-slash" className="eye__icon" />
          </div>

          <label htmlFor="remember" className="remember__label">
            <input type="checkbox" id="remember" name="remember" />
            Recuérdame
          </label>
        </form>
        <ErrorMessage />
      </div>
    );
  }
}

export default LogIn;
