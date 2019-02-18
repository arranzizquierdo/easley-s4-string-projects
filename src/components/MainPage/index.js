import React, { Component, Fragment } from "react";
import "./MainPage.scss";
import Header from '../Header';
import Modal from "../Modal";
import GroupList from "../GroupList";


class MainPage extends Component {
  render() {
    const {
      addModalClick,
      isHidden,
      cancelClickModal,
      handleLogOut,
      groups
    } = this.props;
    return (
      <Fragment>
        <Header
          addModalClick={addModalClick}
        >
          <h2 className="header__tittle">Grupos</h2>
        </Header>
        <Modal
          isHidden={isHidden}
          cancelClickModal={cancelClickModal}
          handleLogOut={handleLogOut}
        />
        <GroupList
          groups={groups}
        />
      </Fragment>
    );
  }
}

export default MainPage;
