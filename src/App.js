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
         // value: '';
      };
   };

   componentWillMount() {
      $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=Cincinnati&cnt=7&APPID=f5e364968f16eed20ecfaf7efa2d6303&units=imperial`, (result) => {
         this.setState({
            weather: result.list,
         });
         console.log(result);
      });
   }

   

   render() {
      return ( 
         <div className="App">
         <div className="App-header">
         <img src={ sun } className="App-logo" alt="logo"/>
         <h2> Your weather forecast: </h2></div> {
            this.state.weather.map((forecast) =>
               <Day taco={ forecast }
               />
            )
         } </div>
      );
   }
}

export default App;
