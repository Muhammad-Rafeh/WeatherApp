import React, { Component } from 'react'
import './Style.css'
import { connect } from 'react-redux'
import { fetchWeather } from '../redux/search/searchActions'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             city : '' ,
              
              forChart : ''

        }
    }
    
 changeCityHandler = (event) => {
     this.setState({ city: event.target.value})
 }

 onKeyUp = (event) => {
     if(event.charCode === 13){

        const city1 = this.state.city
        console.log(this.state.city)

        //redux stuff
        this.props.fetchWeather(city1)
              
     }
 }
    
    

    render() {
        
        return (          
            <div>
                <input type="text" value={this.state.city} 
                onChange={this.changeCityHandler} 
                onKeyPress={this.onKeyUp} 
                placeholder="Enter City Name" 
                className="search"
                />
            </div> 
        )
    }
} 

const mapDispatchToProps = dispatch => {
    
    return {
  
        fetchWeather : (city1) => dispatch(fetchWeather(city1)) 

    }
}
export default connect( null , mapDispatchToProps )(Search)


