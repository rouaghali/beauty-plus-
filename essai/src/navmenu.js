import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Navmenu extends Component {
    
    render() { 
        return ( <div>
            {/* header */}
          
            <div className='colornav'>
            <div className="container">
              <div className="header d-lg-flex align-items-center">
                <div className="header-agile">
                  <h1>
                    <a className="navbar-brand logo" href="index.html">
                      beauty+
                    </a>
                  </h1>
                </div>
                <div className="nav_w3ls">
                  <nav>
                    <label htmlFor="drop" className="toggle"><span className="fa fa-bars" aria-hidden="true" /></label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu">
                      <li className="active"><a href="/">Home</a></li>
                      <li><a href="#about">  Why choose us</a></li>
                      
                      <li className="p-0">
                        {/* First Tier Drop Down */}
                        <label htmlFor="drop-2" className="toggle">Pages <span className="fa fa-angle-down" aria-hidden="true" /> </label>
                        <a href="#">drop down<span className="fa fa-caret-down" aria-hidden="true" /></a>
                        <input type="checkbox" id="drop-2" />
                        <ul className="inner-dropdown">
                          <li><a href="#stats"> Promo</a></li>
                          <li><a href="#team">  beauty center </a></li>
                          <li><a href="#contact">Awards</a></li>
                        </ul>
                      </li>
                      <li><a href="#collection"> Dress </a></li>
                    </ul>
                  </nav>
                </div>
                <div className="buttons ml-auto">
                  <ul className="form-w3pvt-grid">
                    <li><a href="#contact" className="user">
                        <span className="fa fa-user-o" />
                      </a>
                    </li>
                    <li>
                      <form action="#" method="post" className="newsletter">
                        <input className="search" type="search" placeholder required />
                        <button className="form-control btn" value><span className="fa fa-search" /></button>
                        <div className="clearfix" />
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          
          {/* //header */}
        </div> );
    }
}
 
export default Navmenu;