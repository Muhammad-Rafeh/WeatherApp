import React, { Component } from 'react'
import './Style.css'
import { connect } from 'react-redux'

export class Temp extends Component {
    render() {
        return (
            <div>
                <div className='temp'>{this.props.temperature}°C </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        temperature : state.temperature,
        //cityName : state.cityName
    }
}

export default connect(mapStateToProps)(Temp)



// const Temp = ({city2}) => {

//     //axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=a8b682094bc8650623e1d604278d89d1`)
//     console.log(city2)
//     return 
// } 

// export default Temp
