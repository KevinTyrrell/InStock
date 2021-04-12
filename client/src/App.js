// import logo from './logo.svg';
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WarehousesList from "./components/WarehousesList/WarehousesList";
import AddWarehouse from "./components/NewWarehouse/Addwarehouse";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleInventory from "./components/SingleInventory/SingleInventory";
import InventoryList from "./components/InventoryList/InventoryList";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        {/* <AddWarehouse /> */}
        <Switch>
          <Route path="/warehouses" exact component={WarehousesList} />
          <Route path="/inventories/:itemId" component={SingleInventory} />
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
