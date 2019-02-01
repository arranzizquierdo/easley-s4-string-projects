import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
    render() {
        return (
            <div className="modal__container">
                <ul className="modal__list">
                    <li className="modal__item">¿Qué quieres hacer?</li>
                    <li className="modal__item">Cerrar Sesión</li>
                    <li className="modal__item">Cancelar</li>
                </ul>
            </div>
        );
    }
}

export default Modal;