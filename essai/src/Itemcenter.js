import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    


    
class Itemcenter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  

    render() { 
        const {item}=this.props

return(
    <div className="col-lg-3 col-sm-6 mb-5">
    <div className="box13">
      <img src={item.image} className="img-fluid" alt />
      <div className="box-content">
        <h3 className="title">{item.name}</h3>
        <span className="post">Beauty Center</span>
        <span className="post">Lieu: {item.lieu}</span>
        <span className="post">: {item.lieu}</span>
        <ul className="social">
          <li><a href="#"><span className="fa fa-facebook" /></a></li>
          <li><a href="#"><span className="fas fa-arrow-right"/></a></li>
        </ul>
        
      </div>
    </div>
  </div>


       
      
      
        );
      }
  }
  
  
   
  export default Itemcenter;