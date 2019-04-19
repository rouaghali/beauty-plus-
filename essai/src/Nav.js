import React, { Component } from 'react';

import Navmenu from './navmenu'

class  Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="main-banner" id="home">
        <div className="bg-overlay">
          <Navmenu/>
          <div className="container">
            <div className="banner-info">
              <h3>
              A thing of beauty is a joy for ever: <br/>  
            Its loveliness increases; it will never  <br/> 
             Pass into nothingness </h3>
              
             
            </div>
          </div>
        </div>
      </div>
      


    );
  }
}
 
export default Nav ;

