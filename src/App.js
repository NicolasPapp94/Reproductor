import React, { Component } from 'react';
import './App.css';
import Reproductor from './components/reproductor.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Reproductor/>
      </div>
    );
  }
}

export default App;
