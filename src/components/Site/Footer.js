import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../auth/auth.css';



function Footer(){
    return(
        <>
        <footer className="main-footer">
            <div className="pull-right hidden-xs">
            <b>Product of</b>-JET
            </div>
            <strong>Copyright ©  { new Date().getFullYear() }
            </strong> <span>All rights
            reserved. </span>
            <span className="margin1">
            <Link to="/help" exact  className="margin2">Help</Link> 
            <Link to="/privacy" exact className="margin2">Privacy Policy</Link> 
            <Link to="#" className="margin2">Logout</Link>
            <Link to="/partners" exact className="margin2">Our partners</Link> 
            <Link to="/company-register" exact className="margin2">Register your company</Link>
            </span>
            </footer>
        </>
    );
}


export default Footer;