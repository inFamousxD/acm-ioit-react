import React from 'react';
import './DigitalLibrary.css';

const DigitalLibrary = () => {

    return (
        <React.Fragment>
            <section class="icons">
                <a href="http://localhost:3000/acm-ioit-react/Home#" class="iconbtn fas fa-laptop"></a>
                <a href="https://dl.acm.org/" class="iconbtn fas fa-book"></a>
                <a href="http://localhost:3000/acm-ioit-react/Home#" class="iconbtn fas fa-cog"></a>
                <a href="https://technews.acm.org/" class="iconbtn fas fa-newspaper"></a>
                <a href="http://localhost:3000/acm-ioit-react/Home#" class="iconbtn fas fa-flask"></a>
                <a href="https://xrds.acm.org/" class="iconbtn fas fa-link"></a>
            </section>  
        </React.Fragment>
    )
}

export default DigitalLibrary;
