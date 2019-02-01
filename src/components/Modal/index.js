import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
    render() {
        return (
            <div className="modal__container">
                <ul className="modal__list">
                    <li className="modal__item-title">¿Qué quieres hacer?</li>
                    <li className="modal__item modal__item-sesion">Cerrar Sesión</li>
                    <li className="modal__item modal__item-cancel">Cancelar</li>
                </ul>
            </div>
        );
    }
}

export default Modal;