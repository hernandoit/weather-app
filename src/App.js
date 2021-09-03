import React, { Component } from 'react';
import './App.css';
// import Weather from './components/Weather'
// API key ='bcfd2504f5065eba3f9ac4f0de960eff'

const API_Key ='bcfd2504f5065eba3f9ac4f0de960eff'

class App extends Component {
  constructor(){
    super()
    this.state={
      city: undefined,
      country: undefined,
      location: undefined,
      temperature: undefined,
      humidity: undefined,
      condition: undefined
    }
  }

handleSubmit = e => {

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if (country && city) {
      const api_call = fetch(
        `api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_Key}`
      );

      const response = api_call.json();

      this.setState({
        city: response.name,
        country: response.sys.country,
        location: response.location,
        temperature: response.temp,
        humidity: response.humidity,
        condition: response.condition
      });
      } 
    }

render(){
  return (
      <div className="App">
        <> 
        <div id="main-container">
        <div id="aside">picture of trees</div>
          <div id="main">
            <form onSubmit={this.handleSubmit} className="form-inline">
              <input type="text" name="city" placeholder="City..."></input>
              <input type="text" name="country" placeholder="Country..."></input>
              <button>Get Weather</button><br></br>
                  <label id="location">Location: <span>{this.state.location}</span></label><br></br>
                  <label id="temperature">Temperature: <span>{this.state.temp}</span></label><br></br>
                  <label id="humidity">Humidity: <span>{this.state.humidity}</span></label><br></br>
                  <label id="condition">Conditions: <span>{this.state.condition}</span></label><br></br>
            </form>
          </div>
          </div>
        </>
      </div>       
    )
  }
}

export default App;
