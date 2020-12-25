import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Style.css'

export class WeatherImg extends Component {
    render() {
        return (
            <div className='cityName_temp_adjustment'>
                <div className={this.props.weather==='Rain' 
                || this.props.weather==='Haze' 
                || this.props.weather==='Clear' 
                || this.props.weather==='Fog' 
                || this.props.weather==='Clouds'
                || this.props.weather==='Smoke'  ?
                 `${this.props.weather} ` : 'Clear'} alt="sun"  />
                 <div className='date '>{this.props.weather}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        weather : state.weather
    }
}

export default connect(mapStateToProps)(WeatherImg)
