import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (   
      <Provider store={store}>   
        <div>
          <Header />
          <List />
        </div>
      </Provider>
    )
  }
}