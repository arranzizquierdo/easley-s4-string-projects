import React, { Component, Fragment } from "react";
import "./ConversationPage.scss";
import Header from "../Header";
import groupImage from "../../images/groupImage.jpg";
import IndividualMessage from "../IndividualMessage";
import SendMessage from "../SendMessage";
import Modal from "../Modal";
import GoBack from "../GoBack";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../Loading";

class ConversationPage extends Component {
  render() {
    const { addModalClick, isHidden, cancelClickModal, handleLogOut, isLoading, dataUser, groups } = this.props;
    const groupId = parseInt(this.props.match.params.id);
    const currentGroup = groups.find(item =>{
      return item.id === groupId;
    });
    console.log(groups);
    if(groups.length === 0){
      return <Loading />
    }else if(!currentGroup){
      return <p>404</p>
    }else{
      return (
        <Fragment>
          <Header addModalClick={addModalClick}>
            <div className="header__group__container">
              <img
                className="header__group__image"
                src={groupImage}
                alt="Icono grupo"
              />
              <span className="header__container__text">
                <h2 className="header__group__title">{currentGroup.name}</h2>
                <p className="header__group__persons">56 personas</p>
              </span>
            </div>
          </Header>
          <main>
            <Link className="style_link" to="/">
              <GoBack />
            </Link>
            <Link className="style_link" to="/conversation-threading">
              <IndividualMessage isLoading={isLoading} dataUser={dataUser} />
            </Link>
            <section className="container__message">
              <SendMessage />
            </section>
            <Modal isHidden={isHidden} cancelClickModal={cancelClickModal} handleLogOut={handleLogOut} />
          </main>
        </Fragment>
      );

    }
  }
}

ConversationPage.propTypes = {
  addModalClick: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
  cancelClickModal: PropTypes.func.isRequired,
  handleLogOut: PropTypes.func.isRequired
};

export default ConversationPage;
