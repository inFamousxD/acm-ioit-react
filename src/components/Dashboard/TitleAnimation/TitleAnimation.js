import React from 'react';
import './TitleAnimation.css';
import SVGSphere from './SVGSphere';
import {anime} from 'react-anime';
import { Row, Col } from 'react-bootstrap';
import Particles from 'react-particles-js';

const paramsToParticle = {
    particles: {
        number: {
            value: 40,
            density: {
            enable: true,
            value_area: 800
            }
        },
        color: {
            value: "#00aaff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.4,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: "#00aaff",
            opacity: 1,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            },
            shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5
            }
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true
            },
            onclick: {
                enable: true
            },
            resize: true
        }
    },
    retina_detect: true
}

const TitleAnimation = () => {
    const scrollRef = React.useRef(null);
    const scrollTo = () => scrollRef.current.scrollIntoView({ behavior: 'smooth' });

    React.useEffect(() => {
        let unleashedAnimation = anime.timeline({
            loop: true,
            autoplay: true,
            direction: 'alternate',
            duration: 5000
        });
        unleashedAnimation.add({
            targets: '.unleashed, .scroll-indicator, .about-ioit-header, .unleashed-ioit, .news-header',
            color: '#09FF00',
            easing: 'easeInOutCirc',
        });

        let scroller = anime.timeline({
            loop: true,
            autoplay: true,
            direction: 'alternate',
            duration: 800
        });
        scroller.add({
            targets: '.scroll-indicator',
            easing: 'easeInOutQuad',
            translateY: 15
        });
    }, [])
    return (
        <div>
            <Row style={{paddingTop: '5rem'}} className='title-animation base'>
                <Particles style={{ position: 'absolute', width: '100%', height: '90vh', top: 0, left: 0, opacity: '0.8' }}
                    params={paramsToParticle}
                ></Particles>
                <Col xs={12} lg={5} md={5} xl={5}>
                    <div className='title-animation-title'>
                        AISSMS IOIT ACM Student Chapter <br /><div className='unleashed'>#UNLEASHED</div>
                        <div className='unleashed-ioit'>• institute • of • information • technology •</div>
                    </div>
                    <SVGSphere />
                </Col>
                <Col xs={12} lg={7} md={7} xl={7}>
                    <div className='title-animation-side-head'>
                        Association for Computing Machinery <br />
                        Advancing Computing as a Science {'&'} Profession   
                    </div>
                    <div className='title-animation-side'>
                        ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence.   
                    </div>
                    <div className='fa fa-chevron-down scroll-indicator' onClick={scrollTo}></div>
                </Col>
                
            </Row>
            <div ref={scrollRef}></div>
        </div>
    )
}

export default TitleAnimation;
