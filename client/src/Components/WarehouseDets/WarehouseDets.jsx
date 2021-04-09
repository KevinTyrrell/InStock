import React, { Component } from "react";
import "./WarehouseDets.scss";
import backArrow from "../../InStock Assets/Icons/arrow_back-24px.svg";
import editBtn from "../../InStock Assets/Icons/edit-24px.svg";
import chevRight from "../../InStock Assets/Icons/chevron_right-24px.svg";
import deleteBtn from "../../InStock Assets/Icons/delete_outline-24px.svg";
import axios from "axios";

export class WarehouseDets extends Component {
  state = {
    currWarehouse: [],
  };

  // state = {
  //   currInventory: null,
  // };

  componentDidMount() {
    axios
      .get("/data/:warehouseId")
      .then((res) => this.setState({ currInventory: res.data }))
      .catch((err) => {
        console.log(err);
      });
  }

  //   componentDidMount() {
  //     axios
  //       .get("/data/:warehouseId")
  //       .then((res) => this.setState({ currInventory: res.data }))
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  render() {
    return (
      <section className="warehouse">
        {this.state.currWarehouse.map((ware) => {
          <div>
            <div className="warehouse__inline">
              <div className="inline">
                <img src={backArrow} alt="back arrow" />
                <h1 className="warehouse__name">Ware Name</h1>
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
          </div>;
        })}

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
