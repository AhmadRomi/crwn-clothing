import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import Header from './components/header/header';
import { Switch, Route,Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
