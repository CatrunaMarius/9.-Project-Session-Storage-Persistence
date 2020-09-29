import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component';



const HatePage = () =>(
  <div>
    <h1>HATE PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatePage} />

    </div>
  );
}

export default App;
