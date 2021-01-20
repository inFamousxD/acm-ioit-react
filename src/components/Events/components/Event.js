
import React from 'react'
import './Event.css';

function Event(props) {

    return (
        <div>{(props.id) % 2 === 0 ?
            <div className="event-body">
                <div className="event">
                    <h2 className="title">{props.title} :- {props.date} [{props.timing}]</h2>
                    <p className="event-info">{props.descLong}</p>
                </div>
                <div className="imgBox">
                    <img src={props.link} alt="loading"></img>
                    <imghover className="txt">
                        <h2>{props.title}</h2>
                        <p>{props.descShort}</p>
                    </imghover>
                </div>
            </div> :
            <div className="event-body">
                <div className="imgBox">
                    <img src={props.link} alt="loading"></img>
                    <imghover className="txt">
                        <h2>{props.title}</h2>
                        <p>{props.descShort}</p>
                    </imghover>
                </div>
                <div className="event">
                    <h2 className="title">{props.title} :- {props.date} [{props.timing}]</h2>
                    <p className="event-info">{props.descLong}</p>
                </div>
            </div>
        }

        </div>

    )
}

export default Event
