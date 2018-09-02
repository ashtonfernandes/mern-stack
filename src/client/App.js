import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
// import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (      
      <div>
        <AppNavbar />
      </div>
    )
  }
}