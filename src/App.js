import React, { Component } from 'react';
import SimpleAppBar from './SimpleAppBar';
import BitcoinViewer from './BitcoinViewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <BitcoinViewer />
      </div>
    );
  }
}

export default App;