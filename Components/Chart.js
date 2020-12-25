import axios from 'axios';
import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
//import './Style.css'


class Chart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             chartData: {
                 labels: ['Current Weather', '12 hours Later', '1 Day Later' , 'One & half Day Later' , '2 Days Later'],
                 datasets:[
                     {
                         label:'Weather Chart',
                         defaultFontColor: 'white',
            
                        borderColor: "white",
                        pointBackgroundColor: "white",
                        pointBorderColor: "white",
                        lineTension: 1,
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(179,181,198,1)",
                         data:[
                             0,
                             0,
                             0,
                             0,
                             0
                         ],
                         backgroundColor:[
                             'white'
                             
                         ]
                         
                     }
                 ]
             }
        }
        
    }
    
    onKeyUp = (event) => {
        if(event.charCode === 13){
            this.componentDidUpdate()
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.cityName !== this.props.cityName){
            console.log("phew")
            let city3 = this.props.cityName
            axios.get(`http://api.weatherapi.com/v1/forecast.json?key=950cedbdc44942bdb28140332202610&q=${city3}&days=10`)
            .then(response => {
                console.log(response)
                this.setState({
                    chartData : { label:[this.state.labels] ,
                         datasets : [{ label: 'Forcast in C' ,
                            defaultFontColor: 'white',
                            
            
                        borderColor: "white",
                        pointBackgroundColor: "white",
                        pointBorderColor: "white",
                        lineTension: 0.1,
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(179,181,198,1)",
                             data : [ response.data.current.temp_c ,
                                 response.data.forecast.forecastday[1].hour[0].temp_c ,
                                 response.data.forecast.forecastday[1].hour[11].temp_c ,
                                  response.data.forecast.forecastday[2].hour[0].temp_c ,
                                  response.data.forecast.forecastday[2].hour[11].temp_c],
                                   backgroundColor:'rgba(0, 0, 0, 0.1)' }]}
                })
            })
            .catch(error => {
                console.log(error)
            })
        }
        

    }

    render() {
        return (
            
                <div >
                    <Line 
                      data={this.state.chartData}
                      options={{
                          maintainAspectRatio: true,
                          legend: {
                            labels: {
                                // This more specific font property overrides the global property
                                fontColor: 'White',
                                boxWidth : 0,
                                fontSize : 15,
                                
                            }},
                            scales : {
                                xAxes: [{
                                    ticks:{
                                      fontColor : "white",
                                      fontSize : 12
                                    },
                                    
                                  }],
                                  yAxes: [{
                                    ticks:{
                                      fontColor : "white",
                                      fontSize : 12
                                    },
                                    
                                  }]
                            }
                            
                      }} onKeyDown={this.onKeyUp}
                      
                    />    
                </div>
            
        )
    }
}

export default Chart
