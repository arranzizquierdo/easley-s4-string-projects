import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LogIn.scss";
import ErrorMessage from "../ErrorMessage";
import ButtonStart from "../ButtonStart";
import PropTypes from 'prop-types';
import Redirect from "react-router-dom/Redirect";
import Loading from "../Loading";

class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordIsHidden: true
      }
    }

  togglePassword = () => {
    this.setState(prevState => (
      {
        passwordIsHidden: !prevState.passwordIsHidden,
      }
    )
    )
  }

  render() {
    const hideOrNot = this.state.passwordIsHidden ? "password" : "text";
    const iconEye = this.state.passwordIsHidden ? "eye-slash" : "eye";
    const { saveData, handleButton, wrongCredentials, handleChecked, token, isAuthenticated, isLoading } = this.props;

    if(isLoading === true){
      return <Loading />
    }
    if(isLoading === false && token && isAuthenticated){
      return <Redirect to="/" />
    }else {

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
            />
          </div>
          <div className="input-icon__container">
            <label htmlFor="password" />
            <input
              type={hideOrNot}
              id="password"
              placeholder="Contraseña"
              name="password"
              className="logIn__input"
              onChange={saveData}
            />
            <FontAwesomeIcon
            onClick = {this.togglePassword}
            icon= {iconEye}
            className="eye__icon"
            />
          </div>

          <label htmlFor="remember" className="remember__label">
            <input
              className="remember__checkbox"
              type="checkbox"
              id="remember"
              name="remember"
              onClick={handleChecked}
            />
            Recuérdame
          </label>
          <ButtonStart
          handleButton={handleButton}
          />

        </form>
        <ErrorMessage
        wrongCredentials={wrongCredentials}
        />
      </div>
    );}
  }
}

export default LogIn;

LogIn.propTypes = {
  saveData: PropTypes.func.isRequired,
  handleButton: PropTypes.func.isRequired,
  wrongCredentials: PropTypes.number,
  handleChecked: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}
