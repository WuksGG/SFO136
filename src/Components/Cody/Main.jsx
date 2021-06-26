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
      y: 0,
      textOne: 'classVisible',
      textTwo: 'classHidden',
      textThree: 'classHidden',
      textSecret: 'classHidden',
      textarea: 'classHidden',
      userList: [' - some programmer', ' - Mason', ' - Soo', ' - Michael'],
      quoteList: ['\'A leetcode a day, keeps the unemployment away\'',
        '\'Make that bread\'',
        '\'drink code, breathe code, live code, the cody way\' - brought to you by hackreactor at galvanize',
        '\'don\'t let your dreams be memes\''
      ],
      quoteIndex: 3
    }
  }
  render() {
    console.log(this);
      return (
        <React.Fragment>
          <div style={{'height': '100px', 'width': '100%', 'position': 'relative'}} className="addBorders" onClick={() => {
            if (this.state.counter < this.state.unusedValue) {
            this.setState({
                counter: 0
            });}
          }}>{this.state.counter}</div>
          <div className={this.state.testClass} onMouseOver={(ev) => {
            ev.stopPropagation();
            if (this.state.counter > this.state.unusedValue) {
              this.setState({textSecret: 'classVisible', textOne: 'classHidden', textTwo: 'classHidden', textThree: 'classHidden'});
            } else if (this.state.testClass === 'one') {
              this.setState({testClass: 'two', textOne: 'classHidden', textTwo: 'classVisible', counter: this.state.counter + 1});
            } else if (this.state.testClass === 'two') {
              this.setState({testClass: 'three', textTwo: 'classHidden', textThree: 'classVisible', counter: this.state.counter + 1});
            } else {
              this.setState({testClass: 'one', textThree: 'classHidden', textOne: 'classVisible', counter: this.state.counter + 1});
            }
          }}>{this.state.title}
            <div className={this.state.textOne}>Programming</div>
            <div className={this.state.textTwo}>is</div>
            <div className={this.state.textThree}>fun</div>
            <div className={this.state.textSecret}>Stop playing with this!</div>
          </div>
          <div style={{
            'height': 'max-content',
            'width': '80%',
            'margin': '1em auto 1em',
            'padding': '1.5em',
            'backgroundColor': '#353535',
            'boxShadow': 'inset 0px 0px 4px rgba(0, 0, 0, .5)',
            'borderRadius': '10px'
            }}>
            <div>{this.state.quoteIndex}
              <button onClick={ () => {
                if (this.state.quoteIndex > 0) {
                  this.setState({quoteIndex: this.state.quoteIndex-1});
                }
                }}>Left</button>
              <button onClick={ () => {
                if (this.state.quoteIndex < this.state.quoteList.length - 1) {
                  this.setState({quoteIndex: this.state.quoteIndex + 1});
                }
              }}>Right</button>
              <div style={{
                'animation': 'fadeIn linear 1.2s',
                'padding': '0',
                'display': 'flex',
                'flexDirection': 'column',
                'alignItems': 'center',
                'font-size': '1.3rem',
                'font-weight': '700',
                'color': '#eee',
                'margin': '0.5em auto 1.5em'
              }} className={this.state.quoteClass}>{this.state.quoteList[this.state.quoteIndex]}
              <div style={{'color': '#ffc75f', 'marginTop': '0.5em'}}>{this.state.userList[this.state.quoteIndex]}</div></div>
            </div>
            <form><textarea className={this.state.classHidden} id="textarea" name="textarea" rows="4" cols="50" style={{'backgroundColor':'#ccc'}}>
              </textarea>
              <button type='button' onClick={ () => {
                this.setState({quoteList: [document.getElementById("textarea").value, ...this.state.quoteList]});
              }}>Add</button>
            </form>
          </div>
        </React.Fragment>
      )
  }
}