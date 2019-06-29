import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AddForm from './AddForm';
import Smurfs from './Smurfs';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div className="NavBar">
          <NavLink exact={true} to="/" className="inactive" activeClassName="active">Home</NavLink> 
          <NavLink exact={true} to="/add" className="inactive" activeClassName="active">Add</NavLink> 
        </div>      
        <Route exact path="/" component={Smurfs} />
        <Route exact path="/add" component={AddForm} />
      </div>
    </Router>
    );
  }
}

export default App;
