import React, {Component} from 'react';
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";
import "../App.css";

const API_KEY = "9d3221eea82df792852a7272ce12430d";

class App extends Component {

  state = {
    temperature: '',
    city: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async(e) => {
    e.preventDefault();

    // API calls return data object we can start going down the object chain from there.
    // This asyncronous operation lacks error handling, not included because the the control flow 
    // will handle the error case in the else statement.
    // To me this way it will take less memory since in case of error we won't need to run another operation.
  
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json()
    if ( city && country) {
    this.setState({ 
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: "" 
    })
  } else {
    this.setState ({ 
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      error: "Kindly enter the values"
    });
  }
}
render() {
  // DESTRUCTURE
  const {temperature, city, country, humidity, description, error } = this.state 
    return (
    <div>
      <div className="wrapper"> 
        <div className="main">
           <div className="container"> 
              <div className="row">
                <div className="col-xs-5 title-container">
                 <Titles />
                </div>
                <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>    
                <Weather temperature = {temperature}
                         city = {city}
                         country = {country}
                         humidity = {humidity}
                         description = {description}
                         error={error}        
                  />
                </div>       
              </div> 
           </div>
        </div>
      </div>
    </div>

    );
  }
}
// const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // const data = await api_call.json();
    // if( city && country) {

export default App

