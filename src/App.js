import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import { Switch, Route,Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
