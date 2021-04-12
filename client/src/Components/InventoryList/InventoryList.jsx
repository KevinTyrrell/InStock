import React, { Component } from "react";
import axios from "axios";
import "./InventoryList.scss";
import deleteBtn from "../../InStock Assets/Icons/delete_outline-24px.svg";
import editBtn from "../../InStock Assets/Icons/edit-24px.svg";
import itemArrow from "../../InStock Assets/Icons/chevron_right-24px.svg";
import sortArrows from "../../InStock Assets/Icons/sort-24px.svg";

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
        <table className="invTable">
          <tr className="sortBar">
            <th className="sortBar__items">
              INVENTORY ITEM{" "}
              <img className="sortBtn" src={sortArrows} alt="sort arrows" />
            </th>
            <th className="sortBar__cat">
              CATEGORY{" "}
              <img className="sortBtn" src={sortArrows} alt="sort arrows" />
            </th>
            <th className="sortBar__status">
              STATUS{" "}
              <img className="sortBtn" src={sortArrows} alt="sort arrows" />
            </th>
            <th className="sortBar__qty">
              QTY <img className="sortBtn" src={sortArrows} alt="sort arrows" />
            </th>
            <th className="sortBar__name">
              WAREHOUSE{" "}
              <img className="sortBtn" src={sortArrows} alt="sort arrows" />
            </th>
            <h4 className="sortBar__actions">ACTIONS</h4>
          </tr>

          {this.state.invData.map((inv) => {
            return (
              <div className="allInv">
                <tr className="sortItems">
                  <td className="sortItems__name">
                    {inv.itemName}
                    <img src={itemArrow} alt="item info" />
                  </td>
                  <td className="sortItems__cat">{inv.category}</td>
                  <td className="sortItems__stat">{inv.status}</td>
                  <td className="sortItems__qty">{inv.quantity}</td>
                  <td className="sortItems__ware">{inv.warehouseName}</td>
                  <td>
                    <img id="deleteBtn" src={deleteBtn} alt="delete button" />
                    <img src={editBtn} alt="edit button" />
                  </td>
                </tr>
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
        </table>
      </section>
    );
  }
}

export default InventoryList;
