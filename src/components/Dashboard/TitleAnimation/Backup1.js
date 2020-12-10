import React from 'react';
import Anime, {anime} from 'react-anime';


const TitleAnimation = () => {
    return (
        <div style={{
            // backgroundColor: '#222',
            padding: '10rem 10rem'
        }}>
            Title Animation <br />
            <Anime easing="easeInOutSine"
                    loop={true}
                    duration={5000}
                    direction="alternate"
                    delay={anime.stagger(100, {grid: [1, 1], from: 'center'})}
                    translateX= {anime.stagger(10, {grid: [1, 10], from: 'center', axis: 'y'})}
                    translateY= {anime.stagger(10, {grid: [1, 10], from: 'center', axis: 'x'})}
                    rotateZ= {anime.stagger([0, 360], {grid: [1, 30], from: 'center', axis: 'y'})}
                    scale={[.75, .75]}>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                <div className="box" style={{backgroundColor: 'red'}}></div>
                
            </Anime>
        </div>
    )
}

export default TitleAnimation
