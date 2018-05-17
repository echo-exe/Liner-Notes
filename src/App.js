import React, { Component } from 'react';
import TempAlert from './tempalert.js';
import HomeButton from './homebutton.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Is this the Krusty Krab?</h1>
          <HomeButton></HomeButton>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TempAlert></TempAlert>
       
      </div>
    );
  }
}

export default App;
