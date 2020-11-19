import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import SidePanel from './SidePanel';

class Home extends Component{
    render(){
        return(
            <>
        <Header/>
        <SidePanel/>
            <Router>
                <Switch> 
                    <Route path="/home" Component={ Landing }/>
                 </Switch>
            </Router>
        <Footer/>
            </>
        );
    }
}



export default Home