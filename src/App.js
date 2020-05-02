import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/Shop/Shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/signIn-and-signUp/signIn-and-signUp';
import { Switch, Route,Link } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
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
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async(userAuth)=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          },()=>console.log(this.state.currentUser))
        })
      }
      else{
        this.setState({currentUser:userAuth});
      }
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
