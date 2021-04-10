// import logo from './logo.svg';
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WarehousesList from "./Components/WarehousesList/WarehousesList";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NewInventory from './Pages/NewInventory'
import EditInventory from './Pages/EditInventory'
import EditWarehouse from './Pages/EditWarehouse'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
        <Route exact path="/editinventory" component={EditInventory} />
          <Route exact path="/warehouses" component={WarehousesList} />
           <Route exact path="/newinventory" component={NewInventory}/>
         <Route exact path="/editwarehouse" component={EditWarehouse}/>
         {/* <Route path="" component={}/> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
