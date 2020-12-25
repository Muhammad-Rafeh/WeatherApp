
//var React = require('react');


//var Component = React.Component;
import React, { Component } from 'react'

var CanvasJSReact = require('../canvasjs.react.js');
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class Forcast extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Nuclear Electricity Generation in US"
			},
			axisY: {
				title: "Net Generation (in Billion kWh)",
				suffix: " kWh"
			},
			data: [{
				type: "splineArea",
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0.## bn kW⋅h",
				showInLegend: true,
				legendText: "kWh = one kilowatt hour",
				dataPoints: [
					{ x: new Date(2008, 0), y: 70.735 },
					{ x: new Date(2009, 0), y: 74.102 },
					{ x: new Date(2010, 0), y: 72.569 },
					{ x: new Date(2011, 0), y: 72.743 },
					{ x: new Date(2012, 0), y: 72.381 },
					{ x: new Date(2013, 0), y: 71.406 },
					{ x: new Date(2014, 0), y: 73.163 },
					{ x: new Date(2015, 0), y: 74.270 },
					{ x: new Date(2016, 0), y: 72.525 },
					{ x: new Date(2017, 0), y: 73.121 }
				]
			}]
		}
		return (
            <div>
                <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */
                />
                
            </div>
		)
	}
}
//module.exports = Forcast;       
//export default Forcast        

// You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods
