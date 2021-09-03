import React, { Component } from 'react';
import './App.css';

// Bootstrap components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

// COPY OF API KEY
// API key ='bcfd2504f5065eba3f9ac4f0de960eff'

// API key for our weather API
const API_Key ='bcfd2504f5065eba3f9ac4f0de960eff'

// Inherit from Component class
class App extends Component {
  // sets up our initial state
  // first "lifecycle" method - creates the instance of the class!
  constructor(props){
     // sets up the parent class & allows us to override inherited props from Components
    super(props)
    // useful constructors set up state
    this.state = {
      city: '',
      country: '',
      location: '',
      temperature: '',
      humidity: '',
      condition: ''
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
handleSubmit = e => {
    // Prevents the browser default functionality (refresh)
    e.preventDefault()

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    const api_call = (
        'api.openweathermap.org/data/2.5/weather?q=' + city + country + '&units=imperial&appid=' + API_Key
      );
    // if truthy makes the api_call
    if (country && city !== '') {

      const response = api_call;

      this.setState({
        city: response.name,
        country: response.sys.country,
        location: response.name + response.sys.country,
        temperature: response.main.temp,
        humidity: response.main.humidity,
        condition: response.weather.main
      });
      } else {

      }
    }

render(){
  // destructuring the state
  const { location, temp, humidity, condition, city, country } = this.state
  return (
      <div className="App">
        <> 
        <div id="main-container">
        <div id="aside">picture of trees</div>
          <div id="main">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='city'>
              <Form.Control
              required
              type='city'
              name='city'
              value={city}
              placeholder='City...'
              onChange={this.handleChange}
              />
            </Form.Group>
              <Form.Group controlId='country'>
              <Form.Control
              required
              type='country'
              name='country'
              value={country}
              placeholder='Country...'
              onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>Get Weather</Button>
                  <label id="location">Location: <span>{location}</span></label><br></br>
                  <label id="temperature">Temperature: <span>{temp}</span></label><br></br>
                  <label id="humidity">Humidity: <span>{humidity}</span></label><br></br>
                  <label id="condition">Conditions: <span>{condition}</span></label><br></br>
            </Form>
          </div>
          </div>
        </>
      </div>       
    )
  }
}

export default App;
