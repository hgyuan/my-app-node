import React from 'react';
import './App.css';
import CountGroup from "./component/countGroup/countGroup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <CountGroup size={6}/>
      </header>
    </div>
  );
}

export default App;
