import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./IndividualMessage.scss";

class IndividualMessage extends Component {
  render() {
    const { dataUser } = this.props;
    return (
        <section className="individualMessage__container">
        <img className="individualMessage__image" src={dataUser.avatar_url} alt={dataUser.nickname} />
        <div className="individualMessage__data">
          <h2 className="individualMessage__name">{dataUser.nickname}</h2>
          <p className="individualMessage__message">
            Me encantan los flamenquines!
          </p>
        </div>
      </section>

    );
  }
}

IndividualMessage.propTypes = {
  dataUser: PropTypes.object.isRequired
}

export default IndividualMessage;
