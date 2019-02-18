import React, { Component } from 'react';
import './Loading.scss';

class Loading extends Component {
  render() {
    return (

      <strong className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </strong>
    )
  }
}

export default Loading;
