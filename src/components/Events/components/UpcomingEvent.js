import React from 'react'
import './UpcomingEvent.css'
import {Button} from 'react-bootstrap'

function UpcomingEvent(props) {
    return (
        <div>
            <div class="header">
                <h2>Upcoming-Events</h2>
            </div>
            <div className="event-body2">
                <div className="event">
                    <p className='title'>{props.title}</p>
                    <p className='title' style={{ color: '#09bb00' }}><br />by Mario Rozario</p>
                    <p className='title'>{props.date}</p>
                    <p className='title'>{props.timing}</p>
                    <p className="event-info">{props.descLong}</p>
                    <Button size="lg" href={props.registerLink}>Register Now</Button>
                </div>
                <div className="imgBox">
                    <img src={props.link} alt="loading"></img>
                    <imghover className="txt">
                        <h2>{props.title}</h2>
                        <p>{props.descShort}</p>
                    </imghover>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvent
