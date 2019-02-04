import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./MainPage.scss";
import Header from '../Header';
import Modal from "../Modal";
import image from "../../images/temporal_5.jpg";
import GroupList from "../GroupList";


class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <h2 className="header__tittle">Grupos</h2>
        </Header>
        <GroupList />
        <img className="image" src={image} alt="Tom Hanks" />
        <Modal />
      </Fragment>
    );
  }
}

export default MainPage;
