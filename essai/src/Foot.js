import React, { Component } from 'react';



class Foot extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

           <div  className="fooot">


<div className="title-desc text-center">
          <h3 className="title-w3pvt two text-capitalize mb-md-5 mb-4  ">   <span  className="contactus">Contact Us</span></h3>
        </div>
        
        <ul className="list-unstyled row text-left mb-lg-5 mb-3">
          <li className="col-lg-4 adress-info">
            <div className="row">
              <div className="col-md-3 text-lg-center adress-icon">
                <span className="fa fa-map-marker" />
              </div>
              <div className="col-md-9 text-left">
                <h6>Location</h6>
                <p>Beauty+
                  <br />Sousse </p>
              </div>
            </div>
          </li>
          <li className="col-lg-4 adress-info">
            <div className="row">
              <div className="col-md-3 text-lg-center adress-icon">
                <span className="fa fa-envelope-open-o" />
              </div>
              <div className="col-md-9 text-left">
                <h6>Email</h6>
                <a href="mailto:info@example.com">beautycenter+@gmail.com</a>
                <br />
                <a href="mailto:info@example.com">beautycenter+@gmail.com</a>
              </div>
            </div>
          </li>
          <li className="col-lg-4 adress-info">
            <div className="row">
              <div className="col-md-3 text-lg-center adress-icon">
                <span className="fa fa-mobile" />
              </div>
              <div className="col-md-9 text-left">
                <h6>Phone Number</h6>
                <p>23 971 466</p>
                <p> 97 256 233</p>
              </div>
            </div>
          </li>
        </ul>
       
      
        </div>


               
           
         );
    }
}
 
export default Foot;