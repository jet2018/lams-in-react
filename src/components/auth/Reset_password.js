import React, { Component } from 'react';
import Footer1 from '../../Footer1';
import {Link} from 'react-router-dom';
import {DiSwift} from "react-icons/di";
import {FcCancel, FcLock, FcUnlock} from "react-icons/fc"
import { FiEye, FiEyeOff } from 'react-icons/fi';
class ResetPassword extends Component{
    constructor(props){
        super(props);
        this.handleHidePassword = this.handleHidePassword.bind(this);
        this.handleShowPassword = this.handleShowPassword.bind(this);
    }

    handleHidePassword = (e) =>{
        e.preventDefault();
       
    }

    handleShowPassword = (e) =>{
        e.preventDefault();
        // const x = document.getElementsById("pass1");
        // if(x.type === "password"){
        //     x.type = "text";
        //     x.addclass("hide").removeClass("show");

        // }
    }

    render(){
        return(
<section className="first-pages">
<div className="login-box">
  <div className="login-logo">
      <Link to="/">Uni-<b className="text-green">LAMS</b></Link>
  </div>
  {/* <!-- /.login-logo --> */}
  <div classNameName="login-box-body">
    <p className="login-box-msg text-green">You can now create your new password of choice!</p>

    <form action="" method="post">
    <div className="form-group has-feedback">
        <input type="password" name="pass1" className="form-control" placeholder="New Password"/>
        <span>
        <FcLock className="form-control-feedback"/>
        </span>      
        </div>
      <div className="form-group has-feedback">
        <input type="password" name="pass1" className="form-control" placeholder="Confirm Password"/>
        <span>
        <FcUnlock className="text-green form-control-feedback"/>
        </span>
      </div>
        
        {/* <!-- /.col --> */}
        <div className="row form-group">
        <div className="col-xs-6 col-lg-6">
          <button type="submit" className="btn btn-primary text-center btn-raised btn-flat">Reset Now <DiSwift/></button>
        </div>
        <div className="col-xs-6 col-lg-6">
        <span className="btn btn-sm" onClick={this.handleShowPassword}><FiEye/>&nbsp; Show passwords</span>
          <span className="btn btn-sm hide" onClick={this.handleShowPassword}><FiEyeOff/> &nbsp;Hide passwords</span>        </div>
        </div>
    </form>

  </div>
  {/* <!-- /.login-box-body --> */}

  <Link to="/">Cancel the process and login <FcCancel/> </Link>

  </div>
{/* <!-- /.login-box --> */}

<Footer1/>
</section>
        )
    }
}

export default ResetPassword;