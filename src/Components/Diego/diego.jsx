import { Component } from 'react';

/* <div class="hidden-despair">
<iframe src="https://giphy.com/embed/wsiSPSA7ijqwM" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/despair-wsiSPSA7ijqwM"></a></p>
</div> */

export default class Diego extends Component {
  render() {
    return (
      <div class="container">
        <h1>Diego (dee-eh-goh)</h1>
        <h2>Hover over to see how she's really feeling...</h2>
        <div id="hair-flip" onMouseOver={(even) => {
          return;
        }}></div>
        <iframe src="https://giphy.com/embed/26xoqy7OkXaZmkzyo" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/rupaulsdragraces5-rupauls-drag-race-rupaul-season-5-26xoqy7OkXaZmkzyo"></a></p>
        <Despair />
      </div>
    )
  }
}

class Despair extends Component {
  render() {
    return (
      <div>
        <h1>Howdy</h1>
      </div>
    )
  }
}