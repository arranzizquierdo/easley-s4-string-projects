import React, { Component } from 'react';
import './ErrorPage.scss';

class ErrorPage extends Component{
render(){
  return <div className="errorPage__container">
  <p className = "errorPage__text">Ups, algo salió mal...</p>
  <p className = "errorPage__text">Inténtalo de nuevo más tarde.</p>
  </div>
}
}

export default ErrorPage;
