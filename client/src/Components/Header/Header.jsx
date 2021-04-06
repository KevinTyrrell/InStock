import React, { Component } from 'react'
import './Header.scss';
import logo from '../../InStock Assets/Logo/InStock-Logo_1x.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__box">
         <img  className="header__logo" src={logo} alt=''/>
         <ul className="header__tabs">
            <li className="header__warehouse"><a href="#">Warehouses</a></li>
            <li className="header__inventory"><a href="#">Inventory
              </a></li>
          </ul> 
        </div>
      </div>
    )
  }
}
