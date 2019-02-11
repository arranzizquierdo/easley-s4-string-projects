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
      infoConversation: null,
    }
  }

  componentDidMount() {
    const { token } = this.props;
    postConversFetch(token)
      .then(data => {
        return (
          this.setState({
            infoConversation: this.filterConversations(data),
          })
        )
      })
  }

  filterConversations(data){
    const { groups } = this.props;
    const filteredMessages = data.filter(message => message.post_id === groups[0].id)
    return filteredMessages;
  }

  render() {
    const { addModalClick, isHidden, cancelClickModal, handleLogOut, groups } = this.props;
    const { infoConversation } = this.state;
    const groupId = parseInt(this.props.match.params.id);
    const currentGroup = groups.find(item =>{
      return item.id === groupId;
    });
    console.log(groups);
    if(!infoConversation){
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
            <ul>
            {infoConversation.map(message => {
              return (
                <Link key={message.id} className="style_link" to="/conversation-threading">
                <IndividualMessage messageInfo={message} />
              </Link>
              )
            })}
            </ul>
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
  handleLogOut: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  groups: PropTypes.array.isRequired
};

export default ConversationPage;
