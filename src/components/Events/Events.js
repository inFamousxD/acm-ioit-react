import React from 'react';

import News from '../Dashboard/NewsFlash/News';

import './Events.css';

const Events = () => {

  return(
    <div className="event-body">
    <React.Fragment>
      <div>
        <News />
      </div>
    </React.Fragment>
    </div>
  )
};

export default Events;