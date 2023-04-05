import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Body } from "@test/lib1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Main App
      </header>
      <Body text={'hello'} />
    </div>
  );
}

export default App;
