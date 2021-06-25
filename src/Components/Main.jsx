import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super();
    this.state = {
       counter: 0,
      unusedValue: 10,
      title: 'SFO136',
      testClass: 'one',
      x: 0,
      y: 0
    }
  }
  render() {
    console.log(this);
      return (
        <React.Fragment>
          <div style={{'height': '100px', 'width': '500px'}}className='test' onClick={() => {
            if (this.state.counter < this.state.unusedValue) {
            this.setState({
                counter: this.state.counter + 1
            });}
          }}>{this.state.counter}</div>
          <div className={this.state.testClass} onMouseOver={() => {
              if (this.state.testClass === 'one') {
                this.setState({testClass: 'two'});
              } else if (this.state.testClass === 'two') {
                this.setState({testClass: 'three'});
              } else {
                this.setState({testClass: 'one'});
              }
          }}>{this.state.title}</div>
        </React.Fragment>
      )
  }
}