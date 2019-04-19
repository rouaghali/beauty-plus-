import React, { Component } from 'react';
import Navmenu from './navmenu'
import { Container, Row, Col } from 'reactstrap';
import Otheritem from './Otheritem';




const tab=[{name:"Omar l 'artisto",image:'https://images.pexels.com/photos/247206/pexels-photo-247206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',lieu:'Tunis', Promowedding:'45% off',promoother:'40%',promotype:'make up',eventdress:' omar offers - 30% for make up '}
,{name:'Wissem bel Agha',image:'https://images.pexels.com/photos/1321916/pexels-photo-1321916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', lieu:'tunis', Promotype:'coloration',promoother:'40%',weddingdress:'available',eventdress:'Wiseem center offers  your -35% for hair coloration'}
,{name:" Espace Amani",image:'https://images.pexels.com/photos/1937394/pexels-photo-1937394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', lieu:'Tunis', Promotype:'make up',promoother:'40%',weddingdress:' ',eventdress:'40% off for {make up super start + burshing}'}
,{name:" Espace lobna",image:'https://images.pexels.com/photos/1722868/pexels-photo-1722868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', lieu:'Tunis', Promotype:'make up',promoother:'40%',weddingdress:' ',eventdress:' 25% off make up until the end of April'}
,{name:'Wissem bel Agha',image:'https://images.pexels.com/photos/880474/pexels-photo-880474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', lieu:'tunis', Promotype:'coloration',promoother:'40%',weddingdress:'available',eventdress:'25% off Blayage'}
,{name:'Wissem bel Agha',image:'https://images.pexels.com/photos/1797349/pexels-photo-1797349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', lieu:'tunis', Promotype:'coloration',promoother:'40%',weddingdress:'available',eventdress:'15% off coloration'}
,{name:'violette',image:'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/50640932_1700985213335470_5950959105966342144_n.jpg?_nc_cat=105&_nc_ht=scontent.ftun2-1.fna&oh=124ffd1235a4093f05fb18fcac63ca3a&oe=5D3CC3FC', lieu:'tunis', Promotype:'nails',promoother:'40%',weddingdress:'available',eventdress:'15%  nail extension'}



]



class Otherservice extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className='otherservice'>
          <Navmenu/>

    
                 
            
            <section className="team py-5" id="team">
                    <div className="container py-md-5">
                        <center className="tit"> <h1>  enjoy our offers </h1></center>
                      <div className="row team-grid">
                      {
                          tab.map((el,index)=><Otheritem key={index} item={el}/>)
                      }
                        
                      </div>
                    </div>
                  </section>
                  
                  <div >
            
                  
                  </div>

                    <div className="bcontainer">
                    <div className="container">
        <div className="row d-md-flex align-items-center">
          <div className="col-md-2" />
          <div className="col-md-4 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
            <div className="appointment-info text-center p-5">
              <div className="mb-4">
                <h3 className="mb-3">we will reveral your  true beauty</h3>
                
              </div>
              <div className="mb-4">
                
              
              </div>
              <div>
                <h3 className="mb-3">with beauty + </h3>
                <p className="day"><strong></strong></p>
                <span> let's start</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 appointment pl-md-5 ftco-animate fadeInUp ftco-animated">
            <h3 className="mb-3">Appointments</h3>
            <form action="#" className="appointment-form">
              <div className="row form-group d-flex">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>
              <div className="row form-group d-flex">
                <div className="col-md-6">
                  <div className="input-wrap">
                    <div className="icon"><span className="ion-md-calendar" /></div>
                    <input type="text" id="appointment_date" className="form-control" placeholder="Date" />
                  </div>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
              </div>
              <div className="form-group">
                <textarea name id cols={30} rows={3} className="form-control" placeholder="Message" defaultValue={""} />
              </div>
              <div className="form-group">
                <input type="submit" defaultValue="Order" className="btn btn-white btn-outline-white py-3 px-4" />
              </div>
            </form>
          </div>    			
        </div>
      </div>
                    </div>
                  
                    </div>
                    
                  
            
          );
    }
}
 
export default Otherservice;