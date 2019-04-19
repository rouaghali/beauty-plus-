import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from  "./Home";
import Morecenter from './Morecenter';
import Weddingpromo from './weddingpromo';
import Otherservice from './Otherservice';


class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div>

<div className='routes-container'>



<Route exact path='/' component={Home}/> 
{/* <Route  path='/' component={Nav}/>  */}
<Route exact path='/promo' component={Weddingpromo}/>

<Route exact path='/eventdress' component={Otherservice}/>


</div>


            </div>
         );
    }
}
 
export default Routes;






