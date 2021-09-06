import React, { Component } from 'react';
// imports our apps styling
import './App.css';
// imports our image background for aside
// import Image from './components/weather-finder-aside-img.jpeg'
// Bootstrap components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// API key for our weather API
const API_Key ='bcfd2504f5065eba3f9ac4f0de960eff'

// Inherit from Component class
class App extends Component {
  // sets up our initial state
  // first "lifecycle" method - creates the instance of the class!
  constructor(){
     // sets up the parent class & allows us to override inherited props from Components
    super()
    // useful constructors set up state
    this.state = {
      city: '',
      country: '',
      location: undefined,
      temperature: undefined,
      humidity: undefined,
      condition: undefined,
      icon: undefined,
      error: ''
    }
  }

  // Run when the on change event occurs on the input
  // When the user types in the input
  // Event handler function for 'onchange' event
  handleChange = (event) =>
    this.setState({
      // Use event.target.name variable value as the key name
      // & the value of the input as the state value
      // event.target is the input
      // event.target.name is the name attribute/prop
      // event.target.value is the value in the input (what the user typed in)
      [event.target.name]: event.target.value
    })

// Runs when the form is submitted
handleSubmit  = async e => {
    // Prevents the browser default functionality (refresh)
    e.preventDefault()

    const country = e.target.elements.country.value
    const city = e.target.elements.city.value

    if (city && country){
       const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_Key}`)

    // converts our api call into json format
    const data = await api_call.json()

      this.setState({
        city: data.name,
        country: data.sys.country,
        location: data.name + ',  ' + data.sys.country,
        temperature: Math.round(data.main.temp)  + '°',
        humidity: data.main.humidity + '%',
        condition: data.weather[0].description,
        icon: data.weather.icon,
        error: 'Find out the temperature, weather conditions and more...'
      });   
    } else {
      this.state = {
      city: undefined,
      country: undefined,
      location: undefined,
      temperature: undefined,
      humidity: undefined,
      condition: undefined,
      icon: undefined,
      error: 'The city name or country code you have entered is invalid, please try again!'
    }    
  }
}

render(){
  // destructuring the state for readibility and ease of use
  const { location, temperature, humidity, condition, icon, city, country } = this.state 
  return (
      <div className="App">
        <>
        <div id="main-container">
          <div id="aside">
              {/* <img src={Image} alt="Japanese city alley at night"/> */}
                <h1>Weather Finder</h1>
                <p><em>Find out the temperature, weather conditions and more...</em></p>
                <span>{icon}</span>
          </div>
          <div id="main"> 
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='city'>
              <Form.Control
              required
              type='city'
              name='city'
              value={city}
              placeholder='Enter a city here'
              onChange={this.handleChange}
              />  
            </Form.Group>
              <Form.Group controlId='country'>
              <Form.Control
              required
              type='country'
              name='country'
              value={country}
              placeholder='Enter a country here'
              onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>Get Weather</Button>
                  <label id="location">Location: <span>{location}</span></label>
                  <label id="temperature">Temperature: <span>{temperature}</span></label>
                  <label id="humidity">Humidity: <span>{humidity}</span></label>
                  <label id="condition">Conditions: <span>{condition}</span></label>
            </Form>
          </div>
          </div>
        </>
      </div>       
    )
  }
}

export default App;
