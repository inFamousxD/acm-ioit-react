import React from 'react';
import {
    Container, Row
} from 'react-bootstrap';

import './AboutIOIT.css'

const AboutIOIT = () => {
    return (
        <div style={{ backgroundColor: '#000' }}>
            <Container fluid={true} className='about-ioit-container'>
                <Row className='about-ioit-header'>
                    About / Institute of Information Technology
                </Row>
                <Row className='about-ioit-body'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                </Row>
            </Container>
        </div>
    )
}

export default AboutIOIT
