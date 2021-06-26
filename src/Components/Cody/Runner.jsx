import React, { Component } from 'react';

export default class Runner extends Component {
  constructor() {
    super();
    this.state = {
      x: 100,
      y: 100
    }
  }
  render() {
    return (
      <div
      className= 'baseSmall'
      style={{
        'position': 'absolute',
        'top': this.state.y,
        'left': this.state.x
      }}
      onMouseOver={() => {
        do {
          var xOffset = (Math.ceil(Math.random()) * 2 - 1) * Math.random() * 200;
          var yOffset = (Math.ceil(Math.random()) * 2 - 1) * Math.random() * 200;
        } while ((this.state.x - xOffset < 0) && (this.state.y - yOffset < 0))
        this.setState({x: xOffset, y: yOffset});
      }}><div style={{
        'position': 'relative',
        'height': '10px',
        'width': '10px',
        'margin': '0 auto',
        'marginTop': '10px',
        'backgroundColor': 'white'
      }}></div></div>
    )
  }
}