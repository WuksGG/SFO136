import React, { Component, useState } from 'react';



export default class Norman extends Component {

  render () {
    return (
      <div className="meme">
        <h5> Hello its me </h5>
        <img alt="a funky cat" src="https://media0.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif?cid=790b761183888b5311bf659cd0429532bb03444340ce7216&rid=giphy.gif&ct=g" className="catDance"/>


        {/* <button onClick={() => this.setState()}> Click Meh </button> */}
      </div>
    )
  }
}
/*

const CheckBox = ({ handleClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = ()=> {
    setIsChecked(!isChecked);
handleClick()
  }

  const checkbox = isChecked ? selected : deselected;
  return (
  <div>
    <div onClick={toggleCheck}>
    <span> <img alt={'alt'} src={checkbox} /></span>
    </div>
  </div>
  )
}



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