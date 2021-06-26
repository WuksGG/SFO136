import { Component } from 'react';

export default class Introduction extends Component {
  constructor() {
    super();
    this.state = {
      showContributors: 'none',
    };
    this.contributors = [
      {
        "name": "Cody Szeto",
        "emoji": "🐸",
        "reactbday": "June 24, 2021",
        "github": {
          "name": "Cosze",
          "url": "https://github.com/Cosze"
        }
      },
      {
        "name": "Michael Chan",
        "emoji": "🐸",
        "reactbday": "June 24, 2021",
        "github": {
          "name": "WuksGG",
          "url": "https://github.com/wuksgg"
        }
      },
      {
        "name": "Brian Goodall",
        "emoji": "🐸",
        "reactbday": "June 24, 2021",
        "github": {
          "name": "begoodall",
          "url": "https://github.com/begoodall"
        }
      },
      {
        "name": "Juan Mejia",
        "emoji": "🐸",
        "reactbday": "June 24, 2021",
        "github": {
          "name": "juanVmejia",
          "url": "https://github.com/juanVmejia"
        }
      },
      {
        "name": "Norman Fung",
        "emoji": "🐸",
        "reactbday": "June 24, 2021",
        "github": {
          "name": "itsnormsyo",
          "url": "https://github.com/itsnormsyo"
        }
      },
      {
        "name": "Soohyung Lee",
        "emoji": "🐸",
        "reactbday": "June 24, 2021",
        "github": {
          "name": "soohyungl",
          "url": "https://github.com/soohyungl"
        }
      },
      {
        "name": "Andrew Vaughan",
        "emoji": "🐸",
        "reactbday": "June 25, 2021",
        "github": {
          "name": "HotDogTax",
          "url": "https://github.com/ExerciseAndrew"
        }
      },
      {
        "name": "Shandira Ferguson",
        "emoji": "🐸",
        "reactbday": "June 25, 2021",
        "github": {
          "name": "sdfergus",
          "url": "https://github.com/sdfergus"
        }
      },
      {
        "name": "Diego Tobar",
        "emoji": "🐸",
        "reactbday": "June 25, 2021",
        "github": {
          "name": "datobar",
          "url": "https://github.com/datobar"
        }
      },
      {
        "name": "Xing Voong",
        "emoji": "🐸",
        "reactbday": "June 25, 2021",
        "github": {
          "name": "xingvoong",
          "url": "https://github.com/xingvoong"
        }
      },
      {
        "name": "Nicholas Leon",
        "emoji": "🐸",
        "reactbday": "June 25, 2021",
        "github": {
          "name": "nickleon07",
          "url": "https://github.com/nickleon07"
        }
      },
    ];
  }
  render() {
    return (
      <div
        className="introduction"
        style={{
          'fontFamily': 'Dela Gothic One',
          'backgroundColor': '#353535',
          'color': 'white',
          'display': 'flex',
          'flexDirection': 'column',
          'alignItems': 'center',
        }}>
        <div className="row-1" style={{
          'display': 'flex',
        }}>
          <div
            style ={{
              'fontSize': '2em',
              'flex': '1 1',
            }}>Welcome to HRSF136 Expressions</div>
          <div style={{
            'display': 'flex',
            'flexDirection': 'column',
            'flex': '1 1',
            'justifyContent': 'center',
          }}>
            <div>This is a collaborative project of love</div>
            <div>This is a project</div>
        </div>
      </div>
      <div className="intro-bottom" style={{
        'fontFamily': 'Bebas Neue',
        'fontSize': '1.3em',
        'margin': '15px 0'
      }}>
          <div style={{'cursor': 'pointer'}} onClick={() => {
              this.setState({showContributors: 'flex'})
            }}>Made with 💖 by <span style={{
            'color': '#ff8f8f',
          }}>HRSF136</span></div>
          <div style={{
            'fontSize': '0.8em',
            'marginTop': '15px',
            'display': this.state.showContributors,
            'flexDirection': 'column',
          }}>
            <div style={{
                'animation': 'fadeIn linear 0.4s',
                'fontSize': '1.2em',
                'color': '#e3beff',
            }}>Contributors</div>
            <div style={{'animation': 'fadeIn linear 1.2s'}}>
              <ul style={{
                'padding': '0',
                'display': 'flex',
                'flexDirection': 'column',
                'alignItems': 'center',
              }}>
                {this.contributors.map(c => <Contributors name={c.name} github={c.github} emoji={c.emoji} bday={c.reactbday} />)}
              </ul>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

class Contributors extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <li className="contributor"><span><span>{this.props.emoji} {this.props.name}</span> <span>·</span> <span>@{this.props.github.name}</span> <span>·</span> <span>{this.props.bday} {this.props.emoji}</span></span></li>
    )
  }
}

