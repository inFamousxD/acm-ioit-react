import React from 'react';

// import News from '../Dashboard/NewsFlash'

import Event from './components/Event'
import UpcomingEvent from './components/UpcomingEvent'
import EventDetail from './EventDetail'
import Upcoming from './Upcoming'
function createEvent(details) {
  return (
    <>
      <Event
        id={details.id}
        title={details.title}
        descLong={details.descLong}
        descShort={details.descShort}
        link={details.link}
        date={details.date}
        timing={details.timing}
      />
    </>
  );
}

function createUpcomingEvent(upcoming) {
  return (
    <>
      <UpcomingEvent
        id={upcoming.id}
        title={upcoming.title}
        descLong={upcoming.descLong}
        descShort={upcoming.descShort}
        link={upcoming.link}
        date={upcoming.date}
        timing={upcoming.timing}
        registerLink={upcoming.registerLink}
      />
    </>
  );
}

const Events = () => {

  return (
    <div>
      {Upcoming.map(createUpcomingEvent)}
      {EventDetail.map(createEvent)}
    </div>
  )
};



export default Events;