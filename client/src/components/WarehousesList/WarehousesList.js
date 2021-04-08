import React from "react";
import axios from "axios";
import './WarehousesList.scss'
import Delete from '../../assets/Icons/delete_outline-24px.svg'
import Edit from '../../assets/Icons/edit-24px.svg'
import Chevron from '../../assets/Icons/chevron_right-24px.svg'

let url = "/warehouses";

class WarehouseList extends React.Component {
  state = {
    warehouseData: [],
  };

  componentDidMount() {
    axios.get(url).then((response) => {
      this.setState({ warehouseData: response.data });
    }).catch(err => {
        console.log(err)
    });
  }

  render() {
    return (
      <section className="warehouses">
        <div className="warehouses__wrapperOne">
          <h1 className="warehouses__title">Warehouses</h1>
          <input className="warehouses__search" type="text" placeholder="Search..."></input><br></br>
          <button className="warehouses__button" type="button">+ Add New Warehouse</button>
            
        </div>
        {/* <div className="warehouses__bottom-border"></div> */}

        <table style={{ width: "100%" }}>
          <tr className="warehouses__row-headers">
            <th>WAREHOUSE</th>
            <th>ADDRESS</th>
            <th>CONTACT NAME</th>
            <th>CONTACT INFORMATION</th>
          </tr>
          {this.state.warehouseData.map((warehouse) => {
            return (
                // <div className="info__bottom-border" ></div>
              <tr className="info"key={warehouse.id}>
                  <div className="info__top-border" ></div>
                  <div className="info__details">
                <div className="info__leftside">
                <h4>WAREHOUSE</h4>
                
                <div className="info__chevron">
                <td className="info__warehouse-name">{warehouse.name}</td>
                <img src={Chevron} alt='chevron'/>
                </div>
                
                <div className="info__address-container">
                <h4>ADDRESS</h4>
                <td>{warehouse.address}, {warehouse.city}, {warehouse.country} </td>
                </div>
                
                </div>
                
                
            <div className="contact">
                <div className="contact__name">
                    <h4>CONTACT NAME</h4>
                    <td>{warehouse.contact.name} </td>
                </div>
                
                <h4>CONTACT INFORMATION</h4>
                <td className="contact__info">{warehouse.contact.phone} {warehouse.contact.email}</td>
                </div>
            </div>

                <div className="info__icons">
                    <img src={Delete} alt="delete"></img>
                    <img src={Edit} alt="edit"></img>
                </div>
                
              </tr>
            );
          })}
        </table>
      </section>
    );
  }
}

export default WarehouseList;
