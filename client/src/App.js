// import logo from './logo.svg';
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WarehousesList from "./components/WarehousesList/WarehousesList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDets from "./components/WarehouseDets/WarehouseDets";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/warehouses" exact component={WarehousesList} />
          <Route path="/warehouses/:id" exact component={WarehouseDets} />

          {/* <Route path="" component={}/>
         <Route path="" component={}/> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
