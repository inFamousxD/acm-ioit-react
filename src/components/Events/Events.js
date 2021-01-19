import React from 'react';

// import News from '../Dashboard/NewsFlash'

import Event from './components/Event'
import EventDetail from './EventDetail'

function createEvent(details) {
  return (
    <>
      <Event
        id={details.id}
        title={details.title}
        descLong={details.descLong}
        descShort={details.descShort}
        link={details.link}
      />
    </>
  );
}

const Events = () => {

  return (
    <div>
      {EventDetail.map(createEvent)}
    </div>
  )
};



export default Events;