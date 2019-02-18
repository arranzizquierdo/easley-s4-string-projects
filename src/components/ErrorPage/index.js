import React, { Component } from 'react';

class ErrorPage extends Component {
  render() {
    return <div className="errorPage__container">
      <p>Ups, algo salió mal...</p>
      <p>Inténtalo de nuevo más tarde</p>
    </div>
  }
}

export default ErrorPage;
