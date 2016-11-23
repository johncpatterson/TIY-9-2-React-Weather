import React, { Component } from 'react';
import $ from 'jquery';
import Day from './Day';
import sun from './sun1.png';
import './App.css';

class App extends Component {
   constructor(props) {
      super(props);

      this.state={
         weather: [],
         value: 'Cincinnati',
         city: 'Cincinnati',

      };
    this.changeCity = this.changeCity.bind(this);
    this.findLocation = this.findLocation.bind(this);
   }

   componentWillMount() {
      $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&cnt=7&APPID=f5e364968f16eed20ecfaf7efa2d6303&units=imperial`, (result) => {
         this.setState({
            weather: result.list,
            city: result.city.name,
         });
          console.log(result);
      });
   }

   changeCity(e) {
      this.setState({
        value: e.target.value,
      });
   }

   findLocation(e) {
      e.preventDefault();
      $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&cnt=7&APPID=f5e364968f16eed20ecfaf7efa2d6303&units=imperial`, (result) => {
         this.setState({
            weather: result.list,
            value: '',
            city: result.city.name,
         });
      });
   }

   render() {
      return ( 
        <div className="App">
        <div className="App-header">
        <img src={ sun } className="App-logo" alt="logo"/>
        <h2> Your weather forecast for {this.state.city}: </h2>
          <form onSubmit={this.findLocation}>
            <input type="text" value={this.state.value} onChange={this.changeCity} placeholder="Enter your city here..." />
            <button type="submit">Go</button>
          </form>
        </div> {
            this.state.weather.map((forecast) =>
               <Day taco={ forecast }/>
            )
         } 
        </div>
      );
   }
}

export default App;
