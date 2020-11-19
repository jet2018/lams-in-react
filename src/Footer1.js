import React from 'react';
import { NavLink } from 'react-router-dom';
import './components/auth/auth.css';



function Footer1(){
    return(
        <footer className="main-footer main-footer1 ">
            <div className="container">
                <div className="pull-right hidden-xs">
                    <b>Product of</b>-JET
                </div>
                <strong>Copyright ©  { new Date().getFullYear() }</strong>

                <span>All rights reserved. </span>

                <span className="">
                    <NavLink activeStyle={{'color':'blue', 'textDecoration':'underline'}} to="/help" exact  className="margin2">Help</NavLink> 
                    <NavLink activeStyle={{'color':'blue', 'textDecoration':'underline'}} to="/privacy" exact className="margin2">Privacy Policy</NavLink> 
                    <NavLink activeStyle={{'color':'blue', 'textDecoration':'underline'}} to="/" exact className="margin2">Login</NavLink>
                    <NavLink activeStyle={{'color':'blue', 'textDecoration':'underline'}} to="/forgot" exact className="margin2">Forgot Password</NavLink> 
                    <NavLink activeStyle={{'color':'blue', 'textDecoration':'underline'}} to="/company-register" exact className="margin2">Register your company</NavLink>
                </span>
            
            </div>
        </footer>
    );
}


export default Footer1;