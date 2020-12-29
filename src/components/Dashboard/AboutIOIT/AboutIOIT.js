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
                    About Institute of Information Technology
                </Row>
                <Row className='about-ioit-body'>
                 Located at the heart of Pune city, AISSMS IOIT was established in August 1999. 
                 The college has been a prime engineering institute of the city for the past decade. 
                 The institute not only offers courses in core-engineering branches but also in upcoming IT trends such as Machine Learning, Artificial Intelligence and Data Sciences. 
                 With good infrastructural facilities, the institute has enhanced the teaching-learning experience by providing students greater resources, contact with industries and academia, employment opportunities and internships, etc. 
                 Many entrepreneurs and researchers have also been produced by the institute. It is the mission of the college to empower the society through dynamic education.
                </Row>
            </Container>
        </div>
    )
}

export default AboutIOIT
