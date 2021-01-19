
import React from 'react'
import './Event.css';

function Event(props) {
    return (
        <div>
            <div className="event-body">
                <div className="event">
                    <h2 className="title">{props.title}</h2>
                    <p className="event-info">{props.descLong}</p>
                </div>
                <div className="imgBox">
                    <img src={props.link}></img>
                    <imghover className="txt">
                        <h2>{props.title}</h2>
                        <p>{props.descShort}</p>
                    </imghover>
                </div>
            </div>



        </div>
    )
}

export default Event
