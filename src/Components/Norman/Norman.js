import React, { Component, useState } from 'react';
import "./Norman.css";



export default class Norman extends Component {

  render () {
    return (
      <div className="meme">

        <img alt="a funky cat" src="https://media0.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif?cid=790b761183888b5311bf659cd0429532bb03444340ce7216&rid=giphy.gif&ct=g" className="catDance"/>
        <h2 class="tinaText"> click on tina to make it werk</h2>
        <CheckBox />
        {/* <button onClick={() => this.setState()}> Click Meh </button> */}
      </div>
    )
  }
}


const CheckBox = ({ }) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = ()=> {
    setIsChecked(!isChecked);
  }
  return (
  <div>
    <div onClick={toggleCheck}>
      <span>{ isChecked ? <img class="belcher" alt="belch1" src="https://i.imgur.com/GvUO8FO.png"/> : <img class="belcher" alt="belch2" src="https://i.imgur.com/Kc92ABL.png"/> }</span>
    </div>
  </div>
  )
}

/*

class Belcher extends Component {
  constructor() {
    super();
    this.imageOne = this.image.bind(this);
  }

  imageOne() {
    <div>
    <img alt="button" src="https://imgur.com/GvUO8FO" className="Belcher1"/>
    </div>
  }

    return (
    <button onClick={this.imageOne}
    <div>
    <img alt="button" src="https://imgur.com/GvUO8FO" className="Belcher1"/>
    </div>
    </button>
    )
  }
}

src="https://imgur.com/Kc92ABL"
*/