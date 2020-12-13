import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './News.css';

const News = () => {
    return (
       <Container>
           <Row>
               <Col lg={6}>
               <Card className ="md-3" >
               <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400"/>
                    <div className = "card-body">
                        <Card.Title>News</Card.Title>
                        <Card.Text>
                         <div> News Description</div>
                        </Card.Text>
                        <Card.Link href="localhost:3000">Read More</Card.Link>
                    </div>
                </Card>
                </Col>
           </Row>
       </Container>
    )
}
export default News
