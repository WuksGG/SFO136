import { Component } from 'react';
import './styles.css';


export default class Andrew extends Component {
  constructor() {
    super();
    this.state = {
      liked: 'unliked'
    };

  }
  render() {
    return (
      <div className='specialBucket'>
        <button className='likeAndUnlike'onClick={() => {
          this.setState({liked: this.state.liked === 'liked' ? 'unliked' : 'liked'})
        }}>{this.state.liked}</button>
      </div>
    )
  }
}