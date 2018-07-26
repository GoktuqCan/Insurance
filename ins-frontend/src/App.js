import React, { Component } from 'react';
import logo from './logo_element.png';
import './App.css';
import ModuleForm from './components/ModuleForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ backgroundColor: "#3c763d" }}>
          <img src={logo} style={{ height: "80px" }} alt="logo" />
          <h1 className="App-title" style={{ color: "black" }}>Welcome to Element</h1>
        </header>
        <ModuleForm />
      </div>
    );
  }
}

export default App;
