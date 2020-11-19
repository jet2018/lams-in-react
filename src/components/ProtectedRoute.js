import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Protected extends Component{
    render(){
        return(
            <>
            <h1>Hello from the header</h1>
            </>
        );
    }
}

export default Protected;