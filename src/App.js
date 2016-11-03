import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './component/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Input class="classInput" id="idName" value="Hoang Van Quan" />
      </div>
    );
  }
}

export default App;
