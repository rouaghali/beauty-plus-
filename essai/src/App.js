import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';









class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  <div>
<BrowserRouter>

<Routes/>
</BrowserRouter>

    </div>);
  }
}
 
export default App;








