import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Favorites from './components/Favorites/Favorites';
import Router from './router';

class App extends Component {
  render() {
    return (
      <div>
        {Router}
      </div>
    );
  }
}

export default App;
