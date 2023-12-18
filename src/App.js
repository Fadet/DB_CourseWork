import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import loading from './img/loading.gif'
import './App.css';
import {Header} from "./Header";

function App() {
  return (
      <div className="App">
        <Header/>
        <header className="App-header">
          <img src={loading} alt="logo" width="115"
               height="210"/>
        </header>
      </div>
  );
}

export default App;
