//import logo from './logo.svg';
import './App.css';
//import { connect } from 'react-redux'
//import { selectTimeBackground } from './redux/selectors'
//import Search from './components/Search'
//import './components/Style.css'
import { Provider } from 'react-redux'
import store from './redux/store'
//import Temp from './components/Temp'
//import MyDate from './components/Date'
//import WeatherImg from './components/WeatherImg'
import Parent from './components/Parent'
function App() {
  return (
    <Provider store={store} >
    <div className="App">
      {/* <div className={this.props.bgImg} >
      <Search />
      <Temp  />
      <MyDate />
      <WeatherImg />
      </div> */}
      <Parent />
    </div>
    </Provider>
  );
}
// const mapStateToProps=(state) => {
//   return{
//     bgImg : selectTimeBackground(state)
//   }
// }
export default App;
