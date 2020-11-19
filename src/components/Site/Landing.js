import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../auth/auth.css';



function Landing(){
    return(
        <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <section className="content-header">
          <h1>
            Fixed Layout
            <small>Blank example to the fixed layout</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Layout</a></li>
            <li className="active">Fixed</li>
          </ol>
        </section>
    
        {/* <!-- Main content --> */}
        <section className="content">
          <div className="callout callout-info">
            <h4>Tip!</h4>
    
            <p>Add the fixed className to the body tag to get this layout. The fixed layout is your best option if your sidebar
              is bigger than your content because it prevents extra unwanted scrolling.</p>
          </div>
          {/* <!-- Default box --> */}
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Title</h3>
    
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fa fa-minus"></i></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                  <i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              Start creating your amazing application!
            </div>
            {/* <!-- /.box-body --> */}
            <div className="box-footer">
              Footer
            </div>
            {/* <!-- /.box-footer--> */}
          </div>
          {/* <!-- /.box -->. */}
    
        </section>
        {/* <!-- /.content --> */}
      </div>
    );
}


export default Landing;