import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LogIn.scss";
import ErrorMessage from "../ErrorMessage";
import ButtonStart from "../ButtonStart";
import PropTypes from 'prop-types';

class LogIn extends Component {

  render() {

    const { saveData, handleButton, wrongCredentials, handleChecked, userInfo, isChecked } = this.props;
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
              name="nickname"
              className="logIn__input"
              onChange={saveData}
              value={userInfo.nickname}
            />
          </div>
          <div className="input-icon__container">
            <label htmlFor="password" />
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              name="password"
              className="logIn__input"
              onChange={saveData}
              value={userInfo.password}
            />
            <FontAwesomeIcon icon="eye-slash" className="eye__icon" />
          </div>

          <label htmlFor="remember" className="remember__label">
            <input
              className="remember__checkbox"
              type="checkbox"
              id="remember"
              name="remember"
              onClick={handleChecked}
              value={isChecked}
            />
            Recuérdame
          </label>
        </form>
        <ButtonStart handleButton={handleButton} />
        <ErrorMessage wrongCredentials={wrongCredentials} />
      </div>
    );
  }
}

export default LogIn;

LogIn.propTypes = {
  saveData: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,
  wrongCredentials: PropTypes.number
}
