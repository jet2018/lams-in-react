import React, { Component } from 'react';
// import './auth.css';
import {Link} from 'react-router-dom';
import { FiSend } from "react-icons/fi";
import {FcNext} from "react-icons/fc"
import Footer1 from '../../Footer1';
class Login extends Component{
    render(){
        return(
<section className="first-pages">
<div className="login-box">
  <div className="login-logo">
      <Link to="/">Uni-<b className="text-green">LAMS</b></Link>
  </div>
  {/* <!-- /.login-logo --> */}
  <div classNameName="login-box-body">
    <p className="login-box-msg text-green">Sign in to access your dashboard</p>

    <form action="" method="post">
      <div className="form-group has-feedback">
        <input type="email" className="form-control" placeholder="Email"/>
        <span className="glyphicon glyphicon-envelope text-green form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input type="password" className="form-control" placeholder="Password"/>
        <span className="glyphicon glyphicon-lock text-green form-control-feedback"></span>
      </div>
      
        
        {/* <!-- /.col --> */}
        <div className="row">
        <div className="col-xs-5 col-lg-5 form-group">
          <button type="submit" className="btn btn-primary text-center btn-raised btn-flat">Login <FiSend/></button>
        </div>
        </div>
    </form>
  </div>
        <Link to="/forgot">I forgot my password <FcNext/> </Link>
  {/* <!-- /.login-box-body --> */}

  </div>
{/* <!-- /.login-box --> */}

<Footer1/>
</section>
        )
    }
}

export default Login;