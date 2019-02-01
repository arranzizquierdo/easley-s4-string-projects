import React, { Component } from 'react';
import Image from '../../images/bill-murray.png';
import './IndividualMessage.scss';

class IndividualMessage extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="individualMessage__container">
                <img className="individualMessage__image" src={Image} alt="Profile Image"/>
                <div className="individualMessage__data">
                    <h2 className="individualMessage__name">
                        Jojo
                    </h2>
                    <p className="individualMessage__message">
                        Me encantan los flamenquines!
                    </p>
                </div>
            </section>
         );
    }
}
 
export default IndividualMessage;