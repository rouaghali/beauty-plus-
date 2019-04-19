import React, { Component } from 'react';

class  Why extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div>
                 
                 <section className="about py-5" id="about">
        <div className="container py-md-4">
          <div className="row py-md-5">
            <div className="col-lg-4 about-left-w3pvt offset-lg-1 mt-lg-4">
              <div className="main-img">
                <img src="https://retaildesignblog.net/wp-content/uploads/2012/02/YOUD-beauty-center-All-In-Living-Rotterdam-07.jpg" alt className="img-fluid pos-aboimg" />
                <img src="https://retaildesignblog.net/wp-content/uploads/2012/02/YOUD-beauty-center-All-In-Living-Rotterdam-06.jpg" alt className="img-fluid pos-aboimg2" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 about-right offset-xl-1">
              <h4 className="sub-tittle">Why choose us</h4>
              <h3 className="title-w3pvt pr-lg-5 mt-2"> BE beautiful  , BE happy , BE staisfied, conforable and  never lose your time!!! </h3>
              <p className="my-4"> are you stressed to find the most competent beauty center , are you passed with bad experience : bad make up ,not professionel service   </p>
              <p> it's time to stop !!! and be the most fasinating women, girl : beauty + offer to you the  most professonel make up artist, the most conforable services and the best beauty center in all the tunisia, in any city you want , just choose the palce you want </p>
              <a href="#services" className="btn button-style-2 mt-sm-5 mt-4">Read More</a>
            </div>
          </div>
        </div>
      </section>
            </div>
         );
    }
}
 
export default Why ;