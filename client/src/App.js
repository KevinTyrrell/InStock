// import logo from './logo.svg';
import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WarehousesList from "./Components/WarehousesList/WarehousesList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AddWarehouse from "./Components/NewWarehouse/Addwarehouse";
import WarehouseDets from "./Components/WarehouseDets/WarehouseDets";
import InventoryList from "./Components/InventoryList/InventoryList";
import SingleInventory from "./Components/SingleInventory/SingleInventory";
import EditInventory from "./Pages/EditInventory";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        {/* <AddWarehouse /> */}
        <Switch>
          {/* <Route path="/warehouses" exact component={WarehousesList} />
          <Route path="/inventories/:itemId" component={SingleInventory} />
          <Route path="/warehouses/:id" component={WarehouseDets} /> */}
          <Route
         path="/inventory/:id"
         render={(routerProps) => {
            return <EditInventory {...routerProps} />;
          }} 
         />
          {/* <Route path="" component={}/>
         <Route path="" component={}/> */}
          <Route path="/warehouses/:warehouseId" component={WarehouseDets} />
          {/* <Route path="" component={}/> */}
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
