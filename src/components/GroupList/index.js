import React, { Component } from "react";
import "./GroupList.scss";
import groupImage from "../../images/groupImage.jpg";
import { Link } from 'react-router-dom';

class GroupList extends Component {

  render() {
    const { groups } = this.props;
    return (
      <div className="group__container">
        <ul className="group__ul">
          {groups.map(group => {
            return (
              <Link className="style_link" to= {`/conversation-page/${group.id}`} key={group.id}>
                <li className="group__li" key={group.id}>
                  <img className="group__image" src={groupImage} alt="Icono grupo" />
                  <span className="container__text-li">
                    <p className="group__title">{group.name}</p>
                    <p className="group__persons">56 personas</p>
                  </span>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default GroupList;
