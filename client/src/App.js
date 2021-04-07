// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WarehousesList from './components/WarehousesList/WarehousesList'

class App extends React.Component {
 
 
  render(){
   return (
     <Router>
       {/* <Header/> */}
       <Switch>
         <Route path="/warehouses" exact component={WarehousesList}/>
         {/* <Route path="" component={}/>
         <Route path="" component={}/>
         <Route path="" component={}/> */}
       </Switch>
     </Router>

   )
 }
}

export default App;
