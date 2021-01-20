import React from 'react';
import Upcoming from '../../Events/Upcoming';
import Carousel from './components/Carousel';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './News.css';

const News = () => {

  return(
    <div className="news-body">
      <div className="news-header">. . / Events / Upcoming</div>
      <Row className="upcoming">
        <Col sm={12} lg={3} xs={12} xl={3}>
        <img src={Upcoming[0].link} alt="" className="upcoming-img"></img>
        </Col>
        <Col sm={12} lg={9} xs={12} xl={9}>
        <div className="upcoming-title">{Upcoming[0].title}</div> <br />
        <div className="upcoming-body">{Upcoming[0].descShort}</div>
        <Link to='/acm-ioit-react/Events' className="upcoming-redirect" >Read More / Register</Link>
        </Col>
      </Row>
      <div className="news-header">. . / Events / Past</div>
    <React.Fragment>
      <div className="carousel-body">
        <Carousel/>
      </div>
    </React.Fragment>
    </div>
  )
};

export default News;
