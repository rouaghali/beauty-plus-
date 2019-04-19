import React, { Component } from 'react';
import Nav from './Nav';
import Why from './Why';
import Promo from './Promo' ;
import Center from './Center';
import Morecenter from './Morecenter'
import Collection from './Collection';
import Award from './Award';
import Foot from './Foot';
import Weddingpromo from './weddingpromo';
import Description from './Description';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showmore_center:false
         }
    }
    clickShowMore=()=>
    {
        this.setState({
            showmore_center:true
        })
    }
    render() { 
        return ( 
            <div>

        <Nav/>
        
     < Promo/>

     <Why/>
     <Center clickShowMore={this.clickShowMore} showmore_center={this.state.showmore_center}/>
     {
         (this.state.showmore_center)&& <Morecenter/>
     }
    
     <Collection/>
     <Award/>
     
     <Foot/>

     <Description/>
     


            </div>

         );
    }
}
 
export default Home;









