import React from 'react';
import './TitleAnimation.css';
import SVGSphere from './SVGSphere';
import {anime} from 'react-anime';
import { Row, Col } from 'react-bootstrap';

const TitleAnimation = () => {
    React.useEffect(() => {
        let unleashedAnimation = anime.timeline({
            loop: true,
            autoplay: true,
            direction: 'alternate',
            duration: 5000
        });
        unleashedAnimation.add({
            targets: '.unleashed',
            color: '#FF6C00',
            easing: 'easeInOutCirc',
        }).add({
            targets: '.unleashed',
            color: '#09FF00',
            easing: 'easeInOutCirc',
        }).add({
            targets: '.unleashed',
            color: '#FF00FF',
            easing: 'easeInOutCirc',
        });
    }, [])
    return (
        <Row style={{paddingTop: '5rem'}} className='title-animation base'>
            <Col>
                <div className='title-animation-title'>
                    AISSMS IOIT ACM Student Chapter <br /><div className='unleashed'>#UNLEASHED</div>
                    <div className='unleashed' style={{ fontSize: '2.5vh' }}>• institute • of • information • technology •</div>
                </div>
                <SVGSphere />
            </Col>
            <Col>
                <div className='title-animation-side' style={{ marginTop: '20vh', fontSize: '3.5vh' }}>
                    Association for Computing Machinery <br />
                    Advancing Computing as a Science {'&'} Profession   
                </div>
                <div className='title-animation-side' style={{
                    fontSize: '2.5vh',
                    color: '#fff',
                    marginTop: '4vh',
                    marginRight: '2vh',
                    opacity: '0.9'
                }}>
                    ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.
                </div>
            </Col>
        </Row>
    )
}

export default TitleAnimation;
