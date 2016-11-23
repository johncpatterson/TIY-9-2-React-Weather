import React, { Component } from 'react';
import './Day.css';
import moment from 'moment';

class Day extends Component {
  
  render() {
    let icon = `http://openweathermap.org/img/w/${this.props.taco.weather[0].icon}.png`;
    return (
      <div className="Day">
        <h3>{moment.unix(this.props.taco.dt).format('dddd')}</h3>
        <p>Hi: {this.props.taco.temp.max}</p>
        <p>Low: {this.props.taco.temp.min}</p>
        <p>{this.props.taco.weather[0].description}</p>
        <img src={icon} />
      </div>
    );
  }
}

export default Day;
