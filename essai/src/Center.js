import React, { Component } from 'react';

class Center extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>




<section className="team py-5" id="team">
        <div className="container py-md-5">
          <div className="title-desc text-center">
            <h3 className="title-w3pvt text-capitalize mb-md-5 mb-4">Our Professional beauty center</h3>
          </div>
          <div className="row team-grid">
            <div className="col-lg-3 col-sm-6">
              <div className="box13">
                <img src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/50922826_1958059447625009_8552402066801164288_n.jpg?_nc_cat=108&_nc_ht=scontent.ftun4-1.fna&oh=eaa78e15b88bb0817314df1bab6389e3&oe=5D4CA5B5" className="img-fluid" alt />
                <div className="box-content">
                  <h3 className="title">Violette</h3>
                  <span className="post">Beauty Center</span>
                  <ul className="social">
                    <li><a href="#"><span className="fa fa-facebook" /></a></li>
                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
              <div className="box13">
                <img src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/21272211_1671002666265412_2615226734573609052_n.jpg?_nc_cat=101&_nc_ht=scontent.ftun4-1.fna&oh=e4c42401e3edf84945c2bc2d2f9bee82&oe=5D0BC97F" className="img-fluid" alt />
                <div className="box-content">
                  <h3 className="title">Espace Amani</h3>
                  <span className="post">Beauty Center</span>
                  <ul className="social">
                    <li><a href="#"><span className="fa fa-facebook" /></a></li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
              <div className="box13">
                <img src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/53556639_2123010507786516_8505095351382835200_n.jpg?_nc_cat=111&_nc_ht=scontent.ftun4-1.fna&oh=e19500fc44a155941f4395c38bb394bb&oe=5D4E072C" className="img-fluid" alt />
                <div className="box-content">
                  <h3 className="title">Sameh beauty center</h3>
                  <span className="post">Beauty center</span>
                  <ul className="social">
                    <li><a href="https://www.facebook.com/Sameh-Elghali-Beauty-Center-215142388512034/"><span className="fa fa-facebook" /></a></li>
                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
              <div className="box13">
                <img src="https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/49661417_2428364360511327_8367535623430471680_n.jpg?_nc_cat=108&_nc_ht=scontent.ftun12-1.fna&oh=dce11bcd20246ce7778d8f25c46e8c5c&oe=5D047DF5" className="img-fluid" alt />
                <div className="box-content">
                  <h3 className="title"> Wided</h3>
                  <span className="post">beauty center</span>
                  <ul className="social">
                    <li><a href=""><span className="fa fa-facebook" /></a></li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!(this.props.showmore_center)&&<span className="bto">  <a class="btn button-style-2 mt-sm-5 mt-4" onClick={this.props.clickShowMore}>Read More</a></span>}
      
      </section>
      <div >

      
      </div>
        </div> );
    }
}
 
export default Center ;