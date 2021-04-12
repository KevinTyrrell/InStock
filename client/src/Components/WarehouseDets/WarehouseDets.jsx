import React, { Component } from "react";
import "./WarehouseDets.scss";
import backArrow from "../../InStock Assets/Icons/arrow_back-24px.svg";
import editBtn from "../../InStock Assets/Icons/edit-24px.svg";
import chevRight from "../../InStock Assets/Icons/chevron_right-24px.svg";
import deleteBtn from "../../InStock Assets/Icons/delete_outline-24px.svg";
import axios from "axios";
import sortArrows from "../../InStock Assets/Icons/sort-24px.svg";

export class WarehouseDets extends Component {
  // state = {
  //   currentWarehouse: [],
  // };

  // componentDidMount() {
  //   const {
  //     match: { params },
  //   } = this.props;
  //   axios
  //     .get(`/warehouses/${params.warehouseId}`)
  //     .then((res) => {
  //       this.setState({ currentWarehouse: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <section className="warehouse">
        {/* {this.state.currentWarehouse.map((currWare) => {
          return ( */}
        <div>
          <div className="warehouse__inline">
            <div className="inline">
              <img src={backArrow} alt="back arrow" />
              <h1 className="warehouse__name">warehouse name</h1>
            </div>
            <img src={editBtn} id="edit" alt="edit button" />
          </div>
          <div className="details">
            <div>
              <h4 className="details__address">WAREHOUSE ADDRESS:</h4>
              <h4 className="details__address--loc">
                123 Replace Me,
                <br />
                After, Style **
              </h4>
            </div>
            <div className="contact">
              <div>
                <h4 className="contact__name">CONTACT NAME:</h4>
                <h4 className="contact__name--pos">
                  Contact Name
                  <br />
                  Contact Position
                </h4>
              </div>
              <div className="contact__inline">
                <h4 className="contact__info">CONTACT INFORMATION:</h4>
                <h4 className="contact__info--phone">
                  +1-561-235-8490
                  <br />
                  alexa@google.com
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* );
        })} */}

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
          <div className="allInv">
            <tr className="sortItems">
              <td className="sortItems__name">
                itemName
                <img src={chevRight} alt="item info" />
              </td>
              <td className="sortItems__cat">category</td>
              <td className="sortItems__stat">status</td>
              <td className="sortItems__qty">quantity</td>
              <td className="sortItems__ware">warehouseName</td>
              <td>
                <img id="deleteBtn" src={deleteBtn} alt="delete button" />
                <img src={editBtn} alt="edit button" />
              </td>
            </tr>
            <div className="itemStatus">
              <div>
                <h4 className="allInv__items">INVENTORY ITEM</h4>
                <div className="itemArrow">
                  <h4 className="allInv__items--item">itemName</h4>
                  <img src={chevRight} alt="item info" />
                </div>
              </div>
              <div className="allInv__status--fix">
                <h4 className="allInv__status">STATUS</h4>
                <h4 className="allInv__status--inOut">status</h4>
              </div>
            </div>
            <div className="catQty">
              <div>
                <h4 className="allInv__cat">CATEGORY</h4>
                <h4 className="allInv__cat--label">category</h4>
              </div>
              <div className="allInv__qty--fix">
                <h4 className="allInv__qty">QTY</h4>
                <h4 className="allInv__qty--num">quantity</h4>
              </div>
            </div>
            <div className="warehouseName">
              <h4 className="allInv__name">WAREHOUSE</h4>
              <h4 className="allInv__name--ware">warehouseName</h4>
            </div>
            <div className="invBtns">
              <img src={deleteBtn} alt="delete button" />
              <img src={editBtn} alt="edit button" />
            </div>
          </div>
        </table>
        <div className="inv">
          <div className="itemStatus">
            <div className="pos">
              <h4 className="inv__item">INVENTORY ITEM</h4>
              <div className="inv__item--inline">
                <a className="inv__item--prod" href="http://google.com">
                  Product here
                </a>
                <img src={chevRight} alt="chevron right" />
              </div>
            </div>
            <div className="inv__inline">
              <h4 className="inv__status">STATUS</h4>
              <h4 className="inv__status--inout">StockStat</h4>
            </div>
          </div>
          <div className="itemInfo">
            <div className="pos">
              <h4 className="inv__cat">CATEGORY</h4>
              <h4 className="inv__cat--type">Electronics</h4>
            </div>
            <div>
              <h4 className="inv__qty">QTY</h4>
              <h4 id="deskQty">QUANTITY</h4>
              <h4 className="inv__qty--amt">500</h4>
            </div>
          </div>
          <div className="inv__icons">
            <img src={deleteBtn} id="delete" alt="edit button" />
            <img src={editBtn} alt="edit button" />
          </div>
        </div>
      </section>
    );
  }
}

export default WarehouseDets;
