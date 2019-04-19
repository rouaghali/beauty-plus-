import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Promo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>

<section className="facts pt-5" id="stats">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 pt-5">
              <div className="inner-heading">
                <h3 className="title-w3pvt my-md-4"> Promo</h3>
                <p className="mt-md-0 mt-2"> We provide you with the most suitable price   </p>
              </div>
              <div className="row mt-5 fact-grid-main">
                <div className="col-sm-4 stats-grid">
                      <div   >
                  < img className="wedding" src="https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/52908225_2510852328929196_8250752902851723264_n.jpg?_nc_cat=110&_nc_ht=scontent.ftun12-1.fna&oh=b0b945c590b83fc6d7d1cc6daa7b4187&oe=5D42D054"   />
                  </div>
                  
                  <span> promo weeding </span>
                   <Link to='/promo'><a  class="btn button-style-2 mt-sm-5 mt-4">Read More</a></Link>
                </div>
                <div className="col-sm-4 stats-grid">
                  <img className=" tout"    src='https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/54435541_2543912572289838_7915048913147527168_n.jpg?_nc_cat=111&_nc_ht=scontent.ftun12-1.fna&oh=6f5bf210a0a3bc4b95dd83c1b0320d07&oe=5D4515A0' />
                  <span> promo in other services</span>
                  <Link to='/eventdress'><a  class="btn button-style-2 mt-sm-5 mt-4">Read More</a></Link> 
                
                </div>
              
              </div>
            </div>
            <div className="col-lg-5 text-lg-right">
              <img src="images/why.png" className="img-fluid" alt />
            </div>
          </div>
        </div>
      </section>


            </div>
          );
    }
}
 
export default Promo;