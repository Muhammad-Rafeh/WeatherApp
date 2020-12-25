import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectTimeBackground } from '../redux/selectors'
import Search from './Search'
import './Style.css'
import Chart from './Chart'
import Temp from './Temp'
import MyDate from './Date'
import WeatherImg from './WeatherImg'
//import SideNav from './SideNav'

export class Parent extends Component {
    render() {
        return (
            <div className="height">
                <div className={this.props.bgImg} >
                    
               
                <Search />
                <div className='bottomStats'>
                <Temp  />
                <div className='cityName_temp_adjustment'>
                    <div className='cityname'>{this.props.cityName}</div>
                    <MyDate />
                </div>
                <WeatherImg />
                </div>
                     <div  className='chart'><Chart  cityName={this.props.cityName}/></div> 
                

                
                
                
               
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state) => {
    return{
      bgImg : selectTimeBackground(state),
      cityName : state.cityName
    }
  }
export default connect(mapStateToProps)(Parent)
