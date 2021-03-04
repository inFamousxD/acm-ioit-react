import React from 'react';
import './DigitalLibrary.css';

const DigitalLibrary = () => {

    return (
        <React.Fragment>
            <div className="digital-library-head">ACM DIGITAL LIBRARY</div>
            <section class="icons">
                <a href="https://learning.acm.org/e-learning/skillsoft" class="iconbtn fas fa-laptop">{" "}</a>
                <a href="https://dl.acm.org/" class="iconbtn fas fa-book">{" "}</a>
                <a href="https://idp.acm.org/idp/profile/SAML2/Redirect/SSO?execution=e5s1" class="iconbtn fas fa-cog">{" "}</a>
                <a href="https://technews.acm.org/" class="iconbtn fas fa-newspaper">{" "}</a>
                <a href="https://learning.acm.org/e-learning/science-direct" class="iconbtn fas fa-flask">{" "}</a>
                <a href="https://xrds.acm.org/" class="iconbtn fas fa-link">{" "}</a>
            </section>  
        </React.Fragment>
    )
}

export default DigitalLibrary;
