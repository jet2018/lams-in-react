import React, { Component } from 'react';
// import './auth.css';
import {Link} from 'react-router-dom';
// import { FaBeer } from 'react-icons/fa';
import {FcAdvance, FcPrevious} from "react-icons/fc";
import Footer1 from '../../Footer1';


class ForgotPassword extends Component{
    render(){
        return(
<section className="first-pages">
<div className="login-box">
  <div className="login-logo">
      <Link to="/">Uni-<b className="text-green">LAMS</b></Link>
  </div>
  {/* <!-- /.login-logo --> */}
  <div classNameName="login-box-body">
    <p className="login-box-msg text-green">We understand staff happens and you may end up losing your password, but we are here to help. Enter your email you registered with and we shall help you out.</p>


    <form action="" method="post">
      <div className="form-group has-feedback">
        <input type="email" className="form-control" placeholder="Email"/>
        <span className="glyphicon glyphicon-envelope text-green form-control-feedback"></span>
      </div>
      
        
        {/* <!-- /.col --> */}
        <div className="row">
        <div className="col-xs-5 col-lg-5 form-group">
          <button type="submit" className="btn btn-primary text-center btn-raised btn-flat">Request Link <FcAdvance/></button>
        </div>
        </div>
    </form>
  </div>
  <br/>
        <Link to="/"><FcPrevious/> I have my password</Link>
  {/* <!-- /.login-box-body --> */}

</div>
{/* <!-- /.login-box --> */}


<Footer1/>
</section>
        )
    }
}

export default ForgotPassword;