import { Component } from 'react';
import menuItems from './menuItems.json';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <h1 className="navBarLogo">MENU</h1>
        <div className="">
        </div>
        <ul>
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