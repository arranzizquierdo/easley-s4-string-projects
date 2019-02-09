import React, { Component } from "react";
import Image from "../../images/bill-murray.png";
import "./IndividualMessage.scss";
import Loading from "../Loading";

class IndividualMessage extends Component {
  render() {
    const { isLoading, dataUser } = this.props;
    return (
      (isLoading === true)
      ? <Loading />
      : (
        <section className="individualMessage__container">
        <img className="individualMessage__image" src={dataUser.avatar_url} alt={dataUser.nickname} />
        <div className="individualMessage__data">
          <h2 className="individualMessage__name">{dataUser.nickname}</h2>
          <p className="individualMessage__message">
            Me encantan los flamenquines!
          </p>
        </div>
      </section>
      )
    );
  }
}

export default IndividualMessage;
