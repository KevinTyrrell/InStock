import React, { Component } from 'react'
import './Header.scss';
import logo from '../../InStock Assets/Logo/InStock-Logo.svg';

export default class Header extends Component {
  state = {
    warehouse: 'active',
    inventory: ''
  }
  handleClick = (e) => {
    if(e.target.name === 'warehouse'){this.setState({warehouse: 'active', inventory: ''})
  } else {
    this.setState({inventory: 'active', warehouse: ''})
  }
  }
  render() {
    return (
      <div className="header">
        <div className="header__box">
         <img  className="header__logo" src={logo} alt=''/>
         <div className="header__tabs">
            <button className={`header__warehouse ${this.state.warehouse}`} name='warehouse' onClick={this.handleClick}>Warehouses</button>
            <button className={`header__inventory ${this.state.inventory}`} name='inventory' onClick={this.handleClick}>Inventory</button>
          </div> 
        </div>
      </div>
    )
  }
}
