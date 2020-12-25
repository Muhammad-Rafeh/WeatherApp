import { FETCHWEATHERSUCCESS, FETCHWEATHERFAILURE } from './searchTypes'

const initialState = {
    //search : '1',
    temperature: '',
    cityName: 'Enter Place',//response.data.name ,
    weather :'' ,//response.data.weather[0].main ,
    day : '',//response.data.sys.sunrise ,
    night : '',//response.data.sys.sunset ,
    forChart :'' ,//response ,
    present : '',//response.data.dt
}

const searchReducer = ( state=initialState , action) => {
    switch(action.type){
        case FETCHWEATHERSUCCESS: return {
            ...state,
            //search : action.payload ,
            temperature : action.payload.main.temp , 
            cityName: action.payload.name ,
            weather : action.payload.weather[0].main ,
            day : action.payload.sys.sunrise ,
            night : action.payload.sys.sunset ,
            forChart : "response" ,
            present : action.payload.dt
        }
        case FETCHWEATHERFAILURE: return {
            ...state,
            cityName: 'Not a Place',
            weather :'' ,//response.data.weather[0].main ,
    day : '',//response.data.sys.sunrise ,
    night : '',//response.data.sys.sunset ,
    forChart :'' ,//response ,
    present : '',//response.data.dt
    temperature: ''
        }
    default: return state
    }
}

export default searchReducer