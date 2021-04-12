// import logo from './logo.svg';
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WarehousesList from "./components/WarehousesList/WarehousesList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddWarehouse from "./components/NewWarehouse/AddWarehouse";
import WarehouseDets from "./components/WarehouseDets/WarehouseDets";
import InventoryList from "./components/InventoryList/InventoryList";
import SingleInventory from "./components/SingleInventory/SingleInventory";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <AddWarehouse />
        <Switch>
          <Route path="/warehouses" exact component={WarehousesList} />
          <Route path="/inventories/:itemId" component={SingleInventory} />
          <Route path="/warehouses/:id" component={WarehouseDets} />
          {/* <Route path="" component={}/>
         <Route path="" component={}/> */}
          {/* <Route path="" component={}/> */}
          <Route path="/inventories" exact component={InventoryList} />
          {/* <Route exact path="/newinventory" component={NewInventory} /> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
