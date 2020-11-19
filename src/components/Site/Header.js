import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header className="main-header">
            {/* <!-- Logo --> */}
            <Link to="/home" className="logo">
              {/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
              <span className="logo-mini">L<b>A</b>MS</span>
              {/* <!-- logo for regular state and mobile devices --> */}
              <span className="logo-lg">Uni<b>-</b>LAMS</span>
            </Link>
            {/* <!-- Header Navbar: style can be found in header.less --> */}
            <nav className="navbar navbar-static-top">
              {/* <!-- Sidebar toggle button--> */}
              <Link to="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </Link>
        
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  {/* <!-- Messages: style can be found in dropdown.less--> */}
                  <li className="dropdown messages-menu">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-envelope-o"></i>
                      <span className="label label-success">4</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="header">You have 4 messages</li>
                      <li>
                        {/* <!-- inner menu: contains the actual data --> */}
                        <ul className="menu">
                          <li>
                              {/* <!-- start message --> */}
                            <Link href="#">
                              <div className="pull-left">
                                <img src="../../dist/img/user-160x160.jpg" className="img-circle" alt="User"/>
                              </div>
                              <h4>
                                Support Team
                                <small><i className="fa fa-clock-o"></i> 5 mins</small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </Link>
                          </li>
                          {/* <!-- end message --> */}
                        </ul>
                      </li>
                      <li className="footer">
                          <Link to="#">See All Messages</Link>
                    </li>
                    </ul>
                  </li>
                  {/* <!-- Notifications: style can be found in dropdown.less --> */}
                  <li className="dropdown notifications-menu">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-bell-o"></i>
                      <span className="label label-warning">10</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="header">You have 10 notifications</li>
                      <li>
                        {/* <!-- inner menu: contains the actual data --> */}
                        <ul className="menu">
                          <li>
                            <Link to="#">
                              <i className="fa fa-users text-aqua"></i> 5 new members joined today
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="footer">
                          <Link to="#">View all</Link></li>
                    </ul>
                  </li>
                  {/* <!-- Tasks: style can be found in dropdown.less --> */}
                  <li className="dropdown tasks-menu">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-flag-o"></i>
                      <span className="label label-danger">9</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="header">You have 9 tasks</li>
                      <li>
                        {/* <!-- inner menu: contains the actual data --> */}
                        <ul className="menu">
                          <li>
                              {/* <!-- Task item --> */}
                            <Link to="#">
                              <h3>
                                Design some buttons
                                <small className="pull-right">20%</small>
                              </h3>
                              <div className="progress xs">
                                <div className="progress-bar progress-bar-aqua" style={{"width": "20%"}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                  <span className="sr-only">20% Complete</span>
                                </div>
                              </div>
                            </Link>
                          </li>
                          {/* <!-- end task item --> */}
                        </ul>
                      </li>
                      <li className="footer">
                        <Link to="#">View all tasks</Link>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- User Account: style can be found in dropdown.less --> */}
                  <li className="dropdown user user-menu">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                      <img src="../../dist/img/user-160x160.jpg" className="user-image" alt="User"/>
                      <span className="hidden-xs">Thanh Nguyen</span>
                    </Link>
                    <ul className="dropdown-menu">
                      {/* <!-- User image --> */}
                      <li className="user-header">
                        <img src="../../dist/img/user-160x160.jpg" className="img-circle" alt="User"/>
        
                        <p>
                          Thanh Nguyen - Web Developer
                          <small>Member since Nov. 2012</small>
                        </p>
                      </li>
                      {/* <!-- Menu Body --> */}
                      <li className="user-body">
                        <div className="row">
                          <div className="col-xs-4 text-center">
                            <Link to="#">Followers</Link>
                          </div>
                          <div className="col-xs-4 text-center">
                            <Link to="#">Sales</Link>
                          </div>
                          <div className="col-xs-4 text-center">
                            <Link to="#">Friends</Link>
                          </div>
                        </div>
                        {/* <!-- /.row --> */}
                      </li>
                      {/* <!-- Menu Footer--> */}
                      <li className="user-footer">
                        <div className="pull-left">
                          <Link to="#" className="btn btn-default btn-flat">Profile</Link>
                        </div>
                        <div className="pull-right">
                          <Link to="#" className="btn btn-default btn-flat">Sign out</Link>
                        </div>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Control Sidebar Toggle Button --> */}
                  <li>
                    <Link to="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        );
    }
}

export default Header;