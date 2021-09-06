// BACKUP SCRIPT FOR TESTING PURPOSES
import React from 'react'
// COPY OF API KEY BECAUSE REASONS
// API key ='bcfd2504f5065eba3f9ac4f0de960eff'

// DIRECT API CALL FOR TESTING ONLY!!!
// api.openweathermap.org/data/2.5/weather?q=ocala&units=imperial&appid=bcfd2504f5065eba3f9ac4f0de960eff
const Weather = (props) => {

    return (
        <div id="main-container">
        <div id="aside">picture of trees</div>
          <div id="main">
            <form onsubmit={this.handleSubmit} class="form-inline">
              <input type="text" name="city" placeholder="City..."></input>
              <input type="text" name="country" placeholder="Country..."></input>
              <button>Get Weather</button><br></br>
                  <label id="location">Location: <span>{this.props.list.name}</span></label><br></br>
                  <label id="temperature">Temperature: <span>{this.props.temp}</span></label><br></br>
                  <label id="humidity">Humidity: <span>{this.props.main.humidity}</span></label><br></br>
                  <label id="condition">Conditions: <span>{this.props.weather.main}</span></label><br></br>
            </form>
          </div>
      </div>
    )
}

export default Weather
