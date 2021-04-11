// import logo from './logo.svg';
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WarehousesList from "./Components/WarehousesList/WarehousesList";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SingleInventory from './Components/SingleInventory/SingleInventory';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/warehouses" exact component={WarehousesList} />
          <Route path="/inventories/:itemId" component={SingleInventory} />
         {/* <Route path="" component={}/>
         <Route path="" component={}/> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
