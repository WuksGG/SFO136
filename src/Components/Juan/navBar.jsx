import { Component } from 'react';
import menuItems from './menuItems.json';
import './navBar.css'

export default class NavBar extends Component {
  state = {clicked: false}
handleClick = () => {
  this.setState({clicked: !this.state.clicked})
}
  render() {
    return (
      <nav class="navBarItems">
        <h1 className="navBarLogo">MENU <i class="fas fa-ellipsis-v"></i></h1>
        <div className="nav-menu" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav menu active' : 'nav-menu'}>
          {menuItems.map((item, index) => {
            return (
              <li key={item} >
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}