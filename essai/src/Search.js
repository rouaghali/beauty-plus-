import React, { Component } from 'react';
import {connect} from 'react-redux'



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { keyword:'' }
    }
    handleChange=(event)=>{
      
        this.setState({
            keyword:event.target.value
        });
        this.props.searchmovie(this.state.keyword)
        
    }
    
    render() { 
        const {filtr}=this.props
        return ( <div className='input_cont' style={{height:'80%'}}>
            <input className='input_val' type='text' onChange={this.handleChange} />
            
        </div> );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return ({
        searchmovie :(x)=>{
            dispatch({
                type: 'SEARCH',
                keyword:x
            })
        }
    })

}

export default connect(null,mapDispatchToProps) (Header);