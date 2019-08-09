import React, { Component } from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Header1 = {
  color: 'white',
  fontSize: '25px',
  padding: '6px 8px 6px 16px'
};

let header3 ={
  fontSize: '15px',
  color: 'white',
}



class App extends Component {
  render() {
    return (

         
<div class="sidenav">

  <h3 style={header3}>Cameron Wright</h3>

        <div class="position"> 
  <ul>
  <h1 style={Header1}>Home</h1>
  <h1 style={Header1}>About me</h1>
  <h1 style={Header1}>Information</h1>
  </ul>

  </div>


</div>




      
     
    );
  }
}

export default App;