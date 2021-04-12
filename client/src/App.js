// import logo from './logo.svg';
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WarehousesList from "./Components/WarehousesList/WarehousesList";
import Addwarehouse from './Components/NewWarehouse/Addwarehouse'
import InventoryList from "./Components/InventoryList/InventoryList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Addwarehouse />
        <Switch>
          <Route path="/warehouses" exact component={WarehousesList} />
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
