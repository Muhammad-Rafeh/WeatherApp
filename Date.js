import React, { Component } from 'react'
import './Style.css'

// let _date = new Date()
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

var m = new Date();
var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var p = month[m.getMonth()];

class MyDate extends Component {

    

      //constructor(props) {
        //  super(props)
    
          //this.
        //   state = {
        //        date :   new Date().toLocaleString()   //(new Date()).toLocalString()
        //   }
      //}

          constructor(props) {
              super(props)
              // this._date = new Date()
          
              this.state = {
                   dateStr: ''// new Date().toLocaleString()
              }
          }
          
      componentDidMount(){
          this.getDate();
      }

       getDate = () => {
        //  const date1 = new Date().toLocaleString()
        const timeless = new Date().toLocaleString()
        const timeless1 = timeless.indexOf(",")
        const timeless2 = timeless.slice( 0 , timeless1 )
         this.setState({
           dateStr: timeless2 //new Date().toLocaleString()
         });
         
       }
    
       //const timeless = this.state.dateStr
    render() {
        return (
            <div className='date'>
                {n} {p} {this.state.dateStr}
            </div>
        )
    }
}

export default MyDate
