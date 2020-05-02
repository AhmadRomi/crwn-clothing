import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/signIn-and-signUp/signIn-and-signUp';
import { Switch, Route,Link } from 'react-router-dom';
import {auth} from './firebase/firebase.utils';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }
  unSubscribeFromAuth=null;
  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;
