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
                <p>All India Shri Shivaji Memorial Society’s Institute of Information Technology, Pune was established in August 1999. The college is a self-financing college and is affiliated to Savitribai Phule Pune University (SPPU). It is approved by AICTE and Director of Technical Education, Maharashtra State. The College is centrally located in the heart of Pune City about 1 km from Pune and Shivaji Nagar Railway Stations. The institute enhances the teaching-learning experience by providing students greater resources, contact with industries and academia, employment opportunities and internships.</p>
                <p>The institute has well qualified and dedicated staff with good infrastructure facilities for UG and PG courses in the form of well-equipped laboratories in all the branches, namely, Computer Engineering, Electrical Engineering, Instrumentation Engineering, Electronics and Telecommunication Engineering, Information Technology and Artificial Intelligence and Data Sciences. The Institute also has Research centre for Electronics and Telecommunication Engineering.</p>
                </Row>
            </Container>
        </div>
    )
}

export default AboutIOIT
