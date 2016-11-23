import React, { Component } from 'react';
import './Day.css';
import moment from 'moment';

class Day extends Component {

  render() {
    return (
      <div className="Day">
        <h2>{moment.unix(this.props.taco.dt).format('dddd')}</h2>
        <p>Hi: {this.props.taco.temp.max}</p>
        <p>Low: {this.props.taco.temp.min}</p>
        <p>Conditions: {this.props.taco.weather[0].description}</p>

      </div>
    );
  }
}

export default Day;
