// import logo from './logo.svg';
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WarehousesList from "./Components/WarehousesList/WarehousesList";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NewInventory from './Pages/NewInventory'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
        <Route exact path="/newinventory" component={NewInventory} />
          {/*<Route path="/warehouses" exact component={WarehousesList} />
           <Route path="" component={}/>
         <Route path="" component={}/>
         <Route path="" component={}/> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
