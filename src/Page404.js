import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {FiFlag, FiHome} from 'react-icons/fi';



function Page_404(){
        return(
    <div className="mt-5 content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <section className="content-header">
      <h1>
        404 Error
      </h1>
      <ol className="breadcrumb">
        <li ><Link to="/home" classNameName="text-green"><FiHome classNameName="text-green h6"/> Back home</Link></li>
        
      </ol>
    </section>

    {/* <!-- Main content --> */}
    <section className="content">
      <div className="error-page">
        <h2 className="headline text-yellow"> 404</h2>

        <div className="error-content">
          <h3><i className="fa fa-warning text-yellow"></i> Oops! Page not found.</h3>

          <p>
            We could not find the page you were looking for. Check the way you typed it or else, you may not be having permissions to access it.
            Meanwhile, you may <Link to="/home">return to your dashboard <FiFlag/> </Link>.
          </p>

          {/* <form className="search-form">
            <div className="input-group">
              <input type="text" name="search" className="form-control" placeholder="Search"/>

              <div className="input-group-btn">
                <button type="submit" name="submit" className="btn btn-warning btn-flat"><i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            
          </form> */}
        </div>
        {/* <!-- /.error-content --> */}
      </div>
      {/* <!-- /.error-page --> */}
    </section>
    {/* <!-- /.content --> */}
  </div>
        );
}

export default Page_404;