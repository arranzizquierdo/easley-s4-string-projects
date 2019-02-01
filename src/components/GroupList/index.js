import React, { Component } from 'react';
import './GroupList.scss';
import groupImage from '../../images/groupImage.jpg';

class GroupList extends Component {
    
    render() { 
        return ( 
            <ul className = "ul__group">
                <li className = "li__group">
                    <img className = "image__group" src={groupImage} alt="Icono grupo"/>
                    <p className = "title__group">Recetas y menús</p>
                    <p className = "persons__group">56 personas</p>
                </li>
            </ul>
         );
    }
}
 
export default GroupList;