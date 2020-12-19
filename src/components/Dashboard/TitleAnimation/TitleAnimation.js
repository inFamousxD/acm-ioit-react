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
            delay: anime.stagger(300)
        }).add({
            targets: '.unleashed',
            color: '#09FF00',
            easing: 'easeInOutCirc',
            delay: anime.stagger(300)
        }).add({
            targets: '.unleashed',
            color: '#7100FF',
            easing: 'easeInOutCirc',
            delay: anime.stagger(300)
        });

        /*let squareAnimation = anime.timeline({
            loop: true,
            autoplay: true,
            duration: 5000
        });
        squareAnimation.add({
            targets: '.title-animation-square',
            easing: 'easeInOutCirc',
            delay: anime.stagger(300),
            rotateZ: 360
        })*/
    }, [])
    return (
        <Row style={{paddingTop: '5rem'}} className='title-animation base'>
            <Col>
                <div className='title-animation-title'>
                    AISSMS IOIT ACM Student Chapter <br /> <div className='unleashed'>#UNLEASHED</div>
                </div>
                <SVGSphere />
            </Col>
            <Col>
                <div className='title-animation-side'>
                    
                </div>
                {/* <div className='title-animation-square'></div> */}
            </Col>
        </Row>
    )
}

export default TitleAnimation;
