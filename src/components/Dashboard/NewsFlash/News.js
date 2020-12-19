import React from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import './News.css';

const News = () => {
    return (
        <Container className="container p-3 my-3 border" fluid>
           <Row>
           <Col sm={7}>
           <Image src="https://source.unsplash.com/user/erondu/600x400" rectangle></Image>
                    
           </Col>
               <Col sm={5} className="News">
                   <body>
                   <h2 className='News-heading' > Headline</h2>
                   <p className='News-info'>
                   ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking
                   </p>
                   <a className="Link" href="https://www.acm.org/" target="">Read More</a>
                   </body>
                   
               </Col>
           </Row>
       </Container>
    )
}
export default News
