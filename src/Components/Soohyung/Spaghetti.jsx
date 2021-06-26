import React, { useState } from 'react';

const Spaghetti = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="spaghetti">
      <div class="row-1">
        <img alt="" width="560" height="315" src="https://www.foodnetwork.com/content/dam/images/food/video/9/93/936/9365/9365699.jpg" className="spaghettur"/>
        <img alt="" width="560" height="315" src="https://media.giphy.com/media/Td2ohS6FcoSGjyyyf3/giphy.gif" className="spaghettur"/>
        <img alt="" width="560" height="315" src="/tenor.gif" className="spaghettur"/>
      </div>
      <div class="row-1">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SW-BU6keEUw?"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        { isShown ?
          <img alt="" width="560" height="315" src="https://acegif.com/wp-content/gifs/spaghetti-59.gif"
            onMouseLeave={() => setIsShown(false)}></img> :
          <div
            onMouseEnter={() => setIsShown(true)}
            style={{'height': '315px', 'width': '560px'}}></div>
        }
        <img alt="" width="560" height="315" src="https://acegif.com/wp-content/gifs/spaghetti-56.gif" className="spaghettur"/>
      </div>
    </div>
  )
}

export default Spaghetti;