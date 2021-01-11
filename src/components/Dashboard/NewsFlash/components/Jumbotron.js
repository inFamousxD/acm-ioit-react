import React from 'react';

import './Jumbotron.css';

const Jumbotron = (props) => {
    return(
        <div className="jumbotron--body">
                <h1>{props.title}</h1>
                <h3>
                    <p>
                        {props.text}
                    </p>
                </h3>
        </div>
    )
};

export default Jumbotron;