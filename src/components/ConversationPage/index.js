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
import { postConversFetch } from '../services/SendTokenForConvers';
import Loading from "../Loading";

class ConversationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoConversation: null
    }
  }

  componentDidMount() {
    this.bringMessages();
    this.interval = setInterval(() => this.bringMessages(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  bringMessages() {
    const {
      token,
      errorCatch
    } = this.props;
    postConversFetch(token)
      .then(data => {
        return (
          this.setState({
            infoConversation: data
          })

        )
      })
      .catch(error => errorCatch(error))
  }

  render() {
    const {
      addModalClick,
      isHidden,
      cancelClickModal,
      handleLogOut,
      currentGroup,
      inputSendMessage,
      inputGetMessage,
      textInput
    } = this.props;
    const { infoConversation } = this.state;

    if (!infoConversation) {
      return (<Loading />)
    } else {
      return (
        <Fragment>
          <Header
            addModalClick={addModalClick}>
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
            <Link
              className="style_link"
              to="/">
              <GoBack />
            </Link>
            <ul>
              {infoConversation
                .filter(message => message.post_id === null)
                .map(message => {
                  return (
                    <Link
                      key={message.id}
                      className="style_link"
                      to={`/conversation-page/${message.id}`}>
                      <IndividualMessage
                        messageInfo={message}
                      />
                    </Link>
                  )
                })}
            </ul>
            <section
              className="container__message">
              <SendMessage
                inputSendMessage={inputSendMessage}
                inputGetMessage={inputGetMessage}
                textInput={textInput} />
            </section>
            <Modal
              isHidden={isHidden}
              cancelClickModal={cancelClickModal}
              handleLogOut={handleLogOut} />
          </main>
        </Fragment>
      );
    }

  }
}

ConversationPage.propTypes = {
  infoConversation: PropTypes.array,
  currentGroup: PropTypes.object.isRequired,
};

export default ConversationPage;
