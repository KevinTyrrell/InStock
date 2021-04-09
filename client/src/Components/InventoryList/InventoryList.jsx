import React, { Component } from "react";
import axios from "axios";
import "./InventoryList.scss";
import deleteBtn from "../../InStock Assets/Icons/delete_outline-24px.svg";
import editBtn from "../../InStock Assets/Icons/edit-24px.svg";
import itemArrow from "../../InStock Assets/Icons/chevron_right-24px.svg";

export class InventoryList extends Component {
  state = {
    invData: [],
  };

  componentDidMount() {
    axios
      .get("/inventories")
      .then((res) => {
        this.setState({ invData: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <section className="inventories">
        <div className="inventories__header">
          <h1 className="inventories__title">Inventory</h1>
          <div>
            <input
              type="search"
              placeholder="Search..."
              id="invSearch"
              name="invSearch"
            />
            <button id="addBtn">+ Add New Item</button>
          </div>
        </div>

        {this.state.invData.map((inv) => {
          return (
            <div className="allInv">
              <div className="itemStatus">
                <div>
                  <h4 className="allInv__items">INVENTORY ITEM</h4>
                  <div className="itemArrow">
                    <h4 className="allInv__items--item">{inv.itemName}</h4>
                    <img src={itemArrow} alt="item info" />
                  </div>
                </div>
                <div className="allInv__status--fix">
                  <h4 className="allInv__status">STATUS</h4>
                  <h4 className="allInv__status--inOut">{inv.status}</h4>
                </div>
              </div>
              <div className="catQty">
                <div>
                  <h4 className="allInv__cat">CATEGORY</h4>
                  <h4 className="allInv__cat--label">{inv.category}</h4>
                </div>
                <div className="allInv__qty--fix">
                  <h4 className="allInv__qty">QTY</h4>
                  <h4 className="allInv__qty--num">{inv.quantity}</h4>
                </div>
              </div>
              <div className="warehouseName">
                <h4 className="allInv__name">WAREHOUSE</h4>
                <h4 className="allInv__name--ware">{inv.warehouseName}</h4>
              </div>
              <div className="invBtns">
                <img src={deleteBtn} alt="delete button" />
                <img src={editBtn} alt="edit button" />
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default InventoryList;
