//import { SEARCH } from './searchTypes'
import { FETCHWEATHERSUCCESS } from './searchTypes'
import { FETCHWEATHERFAILURE } from './searchTypes'
import axios from 'axios'

// export const search = (city1) => {
//     return{    
//         type: SEARCH,
//         payload: city1
//     }
// }

export const fetchWeatherSuccess = (weather) => {
    return{
        type : FETCHWEATHERSUCCESS,
        payload : weather
    }
}

export const fetchWeatherFailure = (errorMsg) => {
    return{
        type : FETCHWEATHERFAILURE,
        payload : errorMsg
    }
}

export const fetchWeather = (city1) => {
    return (dispatch) => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=a8b682094bc8650623e1d604278d89d1&units=metric`)
            .then(response => {
                const weather = response.data
                dispatch(fetchWeatherSuccess(weather))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchWeatherFailure(errorMsg))
            })
    }
}

