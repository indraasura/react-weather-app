import React, { Component } from 'react';

//no need of class as this is a stateless component
// if we are returning only one element (in this case the parent div) then no need of return function
// if there is only one arguement in the arrow function, then no need to enclose it in parenthesis

const Weather = props => (
  <div className="weather__info">
  {
    props.city && props.country && <p className="weather__key">  Location:
    <span className="weather__value">{props.city}, {props.country}</span>
    </p>
  }
  {
    props.temperature &&   <p className="weather__key">  Temperature:
    <span className="weather__value">{props.temperature}</span>
    </p>
  }
  {
    props.humidity && <p className="weather__key">  Humidity:
    <span className="weather__value">{props.humidity}</span>
     </p>
  }
  {
    props.description && <p className="weather__key">  Conditions:
    <span className="weather__value">{props.description}</span>
     </p>
  }
  {
    props.error && <p className="weather__key"> ERROR!
    <span className="weather__value">{props.error}</span>
    </p>
  }
  </div>
);

export default Weather;
