import React, { Component } from 'react';


class Collection  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<div>


<div className="container-fluid py-md-5" id="collection">
        <div className="title-desc text-center">
          <h3 className="title-w3pvt text-capitalize mb-lg-5 mb-4">Latest Collections</h3>
        </div>
        
        
      <div className="row fluid-container body1">
        <div className="col-sm-6 sanstoit class_test">
          <p className="text">Wedding Dress</p>
          <a href className="img1 tilt"> 
            <img   src="https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/52908612_2510852235595872_4918281459988430848_n.jpg?_nc_cat=106&_nc_ht=scontent.ftun12-1.fna&oh=f65ff3f12277e395fafc2cbabf22a6a6&oe=5D45B276"  alt={1} className="photo" />
          </a>
        </div>
        <div className="col-sm-6 toit class_test">
          <p className="text">  Evening dress  </p>
          <a href className="img1 tilt2 "> 
            <img className='photo'src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/54403638_1383616601781068_3549919834558955520_n.jpg?_nc_cat=102&_nc_ht=scontent.ftun2-1.fna&oh=ae61b524c9cd85d62d26297825e65b6d&oe=5D1391AB"  alt={1}  />
          </a>
        </div>
      </div>

      
       
        
        
      </div>











 </div>
         );
    }
}
 
export default Collection ;

