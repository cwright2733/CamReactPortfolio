import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import plogo from '../src/images/pinterest-logo.png'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";



let header3 ={
  fontSize: '15px',
  color: 'white',
}



class App extends Component {
  render() {
    return (
      <Router>

         
      <div class="sidenav">
          <img src={plogo} alt="Portlogo" />
          <h3 style={header3}>Cameron Wright Portfolio</h3>
        <div class="position">
          <ul>
            <Link to="/" className="nav-Link " style={{textDecoration: 'none', color: 'white', fontSize: '25px', padding: '6px 8px 6px 16px', display: 'block'}}>Home</Link>
            <Link to="/about" className="nav-Link" style={{textDecoration: 'none', color: 'white', fontSize: '25px', padding: '6px 8px 6px 16px', display: 'block'}}>About me</Link>
            <Link to="/about" className="nav-Link" style={{textDecoration: 'none', color: 'white', fontSize: '25px', padding: '6px 8px 6px 16px', display: 'block'}}>Information</Link>
          </ul>
        </div>


        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        
      </div> 
      </Router>    
    );
  }
}



export default App;