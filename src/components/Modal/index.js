import React, { Component } from "react";
import "./Modal.scss";
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const {isHidden, cancelClickModal, handleLogOut } = this.props;
    let hidden = '';
    (isHidden)
      ? hidden = 'modal__hidden'
      : hidden = '';
    return (
      <div className={`modal__container ${hidden}`}>
        <ul className="modal__list">
          <li className="modal__item-title">¿Qué quieres hacer?</li>
          <li className="modal__item modal__item-sesion" onClick={handleLogOut}>
            Cerrar Sesión
          </li>
          <li className="modal__item modal__item-cancel" onClick={cancelClickModal}>Cancelar</li>
        </ul>
      </div>
    );
  }
}

Modal.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  cancelClickModal: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired
}


export default Modal;
