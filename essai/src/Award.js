import React, { Component } from 'react';


class Award extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div>
               

<section className="contact py-5" id="contact">
  
        <div className="container py-md-5">
        <div  className='intro'>

<h1>participate in our drawing lots  and gain a makeup <br/> <span className="space">for free in any beauty center  you want</span> </h1>

   </div>

          <div className="title-desc text-center">
            <h3 className="title-w3pvt two text-capitalize mb-md-5 mb-4">participate</h3>
          </div>
          <div className="contact-form mx-auto text-left">
            <form name="contactform" id="contactform1" method="post" action="#">
              <div className="row">
                <div className="col-lg-4 con-gd">
                
                  <div className="form-group">
                    <label>Name *</label>
                    <input type="text" className="form-control" id="name" placeholder name="name" required />
                  </div>
                </div>
                <div className="col-lg-4 con-gd">
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" className="form-control" id="email" placeholder name="email" required />
                  </div>
                </div>
                <div className="col-lg-4 contact-page">
                  <div className="form-group">
                    <label>Submit *</label>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
           
        </div>
      </section>



          <div>
        </div>





            </div>
         );
    }
}
 
export default Award;
