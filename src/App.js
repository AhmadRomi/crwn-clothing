import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route,Link } from 'react-router-dom';
import './App.css';

const HatsPage=(props)=>{
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
      <Link to="/hats/13">13 hat</Link>
      <Link to={`${props.location.pathname}/15`}>15</Link>
    </div>
  )
}
const HatsDetail=(props)=>{
return (<div>
  <h1>Hats Details {props.match.params.id}</h1>
</div>)
}

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/hats" component={HatsPage}/>
      <Route exact path="/hats/:id" component={HatsDetail}/>
      <Route exact path="/ssd/hats" component={HatsPage}/>
      <Route exact path="/ssd/hats/:id" component={HatsDetail}/>
      </Switch>
    </div>
  );
}

export default App;
