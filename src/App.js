import React, { Component } from 'react';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/Forgot_password';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ResetPassword from './components/auth/Reset_password';
import Page_404 from './Page404';
import Home from './components/Site/Home';

class App extends Component{

  // componentDidMount(){
  //   setTimeout(()=> Splash(), 10000);
  // }

  render(){
    return(
      <>
      <Router>
        <Switch>
          <Route path="/reset/:token" component={ResetPassword}/>
          <Route path="/forgot" component={ForgotPassword}/>
          <Route path="/" exact component={Login}/>
          <Route path="/home" exact component={ Home }/>
          <Route path="/" component={Page_404}/>
        </Switch>
      </Router>
        
      </>
    );
  }
}


export default App;
