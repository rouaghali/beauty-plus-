import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Promoitem from './Promoitem';






const tab=[{name:"Omar l 'artisto",image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/14316924_1793763197549630_8938611823470237228_n.jpg?_nc_cat=101&_nc_ht=scontent.ftun12-1.fna&oh=c688d938ada0117ee8bd8cd17480a112&oe=5D02C64F',link:'', lieu:'Tunis', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'}
,{name:'Wissem bel Agha',image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/46226795_1923893984346166_1742818877412212736_n.jpg?_nc_cat=103&_nc_ht=scontent.ftun12-1.fna&oh=95176d358a8e577af5b3ee486da97d90&oe=5D4EB51A', lieu:'tunis', Promowedding:'35% off',promoother:'40%',weddingdress:'available',eventdress:'available'}
,{name:"lobna ben Ammar",image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/54018113_2063821256986758_3508817719090741248_n.jpg?_nc_cat=106&_nc_ht=scontent.ftun12-1.fna&oh=a2519c53a78909453bb78a003a93e78f&oe=5D15E2B3',link:'', lieu:'Lac 2', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'}
,{name:' Espace Amani',image:'https://scontent.ftun12-1.fna.fbcdn.net/v/t1.0-9/54356019_2384328974932774_5318786945592066048_n.jpg?_nc_cat=105&_nc_ht=scontent.ftun12-1.fna&oh=9c48ef8294c0a38bb018779278885434&oe=5D42E8B9', lieu:'tunis', Promowedding:'30%off',promoother:'40%',weddingdress:'available',eventdress:'available'}
]
class Weddingpromo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (


          
            <div className='try'>
    



    < div className='Colorbackpw'>
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
                      <li className="active"><Link to='./'  >Home </Link></li>
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
              <center> <h1>
                  <div className='color'> Wedding discounts </div> </h1> </center>




            <section className="team py-5" id="team">
                    <div className="container py-md-5">
                      
                      <div className="row team-grid">
                      {
                          tab.map((el,index)=><Promoitem key={index} item={el}/>)
                      }
                        
                        
                      </div>
                    </div>
                  </section>
                  <div >
               
                  
                  </div>
                  <img src="http://www.parador-hotels.com/images/uploads/hotel/WEBSITE_WEDDING_188_1100x500.jpg" className="pop" alt />
                    </div>

                    
          );
    }
}
 
export default Weddingpromo;