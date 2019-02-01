import React, { Component } from 'react';
import './ErrorMessage.scss';

class ErrorMessage extends Component{
    render(){
        return <p className="error__text">Usuario/a y/o contraseña incorrecto/a</p>
    }
}

export default ErrorMessage;