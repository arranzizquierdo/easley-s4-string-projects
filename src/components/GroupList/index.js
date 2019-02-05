import React, { Component } from "react";
import "./GroupList.scss";
import groupImage from "../../images/groupImage.jpg";
import { Link } from 'react-router-dom';

class GroupList extends Component {
  render() {
    return (
      <div className="group__container">
        <ul className="group__ul">
        <Link className="style_link" to="/conversation-page">
        <li className="group__li">
            <img className="group__image" src={groupImage} alt="Icono grupo" />
            <span className="container__text-li">
              <p className="group__title">Recetas y menús</p>
              <p className="group__persons">56 personas</p>
            </span>
          </li>
        </Link>

        </ul>
      </div>
    );
  }
}

export default GroupList;
