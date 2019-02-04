import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './GoBack.scss'
import { Link } from 'react-router-dom';


class GoBack extends Component {

  render() {
    return (

        <Link to="/mainpage">
          <button type="button">
          <FontAwesomeIcon
          icon = "angle-double-left"/>
            Volver
          </button>
        </Link>

    );
  }
}

export default GoBack;
