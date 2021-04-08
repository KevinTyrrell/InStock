import React from "react";
import axios from "axios";

let url = "/warehouses";

class WarehouseList extends React.Component {
  state = {
    warehouseData: [],
  };

  componentDidMount() {
    axios
      .get(url)
      .then((response) => {
        this.setState({ warehouseData: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <section>
        <div>
          <h1>Warehouses</h1>
          <input type="text" placeholder="Search..."></input>
          <button></button>
        </div>

        <table style={{ width: "100%" }}>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
          </tr>
          {this.state.warehouseData.map((warehouse) => {
            return (
              <tr key={warehouse.id}>
                <td>{warehouse.name}</td>
                <td>{warehouse.city}</td>
                <td>{warehouse.country}</td>
              </tr>
            );
          })}
        </table>
      </section>
    );
  }
}

export default WarehouseList;
