import React, { Component } from 'react';
import axios from 'axios';
import './AddWarehouse.scss';
import arrow from '../../InStock Assets/Icons/arrow_back-24px.svg'

  
const firstState = {
  warehouse: '',
  address: '',
  city: '',
  country: '',
  name: '',
  position: '',
  number: '',
  email: '',
}



export default class Addwarehouse extends Component {
  state = firstState;

  handleChangeWarehouse = (e) => {
    this.setState({ warehouse: e.target.value })
  }

  handleChangeAddress = (e) => {
    this.setState({ address: e.target.value })
  }

  handleChangeCity = (e) => {
    this.setState({ city: e.target.value })
  }

  handleChangeCountry = (e) => {
    this.setState({ country: e.target.value })
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleChangePosition = (e) => {
    this.setState({ position: e.target.value })
  }

  handleChangeNumber = (e) => {
    this.setState({ number: e.target.value })
  }

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  render() {
    return (
      <div className="card">
          <div className="card__header">
            <img className="card__back" src={arrow} alt=""/>
            <h1 className="card__heading">Add New Warehouse</h1>
          </div>
        <form onSubmit={this.handleSubmit}>
          <div className="card__warehouse">
            <h2 className="card__label">Warehouse Details</h2>
            <label>
              <h3>Warehouse Name</h3>
              </label>
            <input type="text"
            value={this.state.warehouse}
            onChange={this.handleChangeWarehouse}
            placeholder="Warehouse Name"/>
            <label>
              <h3>Street Address</h3>
              </label>
            <input type="text"
            value={this.state.address}
            onChange={this.handleChangeAddress}
            placeholder="Street Address"/>
            <label>
              <h3>City</h3>
              </label>
            <input type="text"
            value={this.state.city}
            onChange={this.handleChangeCity}
            placeholder="City"/>
            <label>
              <h3>Country</h3>
              </label>
            <input type="text"
            value={this.state.country}
            onChange={this.handleChangeCountry}
            placeholder="Country"/>
          </div>
          <div className="card__contact">
            <h2 className="card__label">Contact Details</h2>
            <label>
              <h3>Contact Name</h3>
              </label>
            <input type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
            placeholder="Contact Name"/>
            <label>
              <h3>Position</h3>
              </label>
            <input type="text"
            value={this.state.position}
            onChange={this.handleChangePosition}
            placeholder="Position"/>
            <label>
              <h3>Phone Number</h3>
              </label>
            <input type="text"
            value={this.state.number}
            onChange={this.handleChangeNumber}
            placeholder="Phone Number"/>
            <label>
              <h3>Email</h3>
              </label>
            <input type="text"
            value={this.state.email}
            onChange={this.handleChangeEmail}
            placeholder="Email"/>
          </div>
          <div className="card__btns">
          <button className='card__cancel'>Cancel</button>
          <button className='card__add'>+ Add Warehouse</button>
          </div>
        </form>
      </div>
    )
  }
}