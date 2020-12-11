import React from 'react';
import {anime} from 'react-anime';
import acmLogo from '../../../assets/acm2.png'
import './TitleAnimation.css'

const TitleAnimation = () => {
    // const animationRef = React.useRef(null);
    React.useEffect(() => {
        let anim1 = anime.timeline({
            duration: 2500,
            loop: true,
            direction: 'alternate',
        });
        anim1.add({
            targets: '.square',
            translateX: anime.stagger(40, {grid: [32, 5], from: 'center', axis: 'x'}),
            translateY: anime.stagger(40, {grid: [32, 5], from: 'center', axis: 'y'}),
            rotateZ: anime.stagger([945, 945], {grid: [32, 5], from: 'center', axis: 'x'}),
            easing: 'easeInOutCirc',
            delay: anime.stagger(200, {grid: [32, 5], from: 'center'}),
            backgroundColor: '#0069cc',
            scale: [0.6, 2],
            opacity: [0, 0.75],
            borderRadius: anime.stagger(['10%', '10%'], {grid: [32, 5], from: 'center'}),
        }).add({ // transform into circles
            targets: '.square',
            rotateZ: anime.stagger([315, 315], {grid: [32, 5], from: 'center', axis: 'x'}),
            easing: 'easeInOutCirc',
            delay: anime.stagger(30, {grid: [32, 5], from: 'center'}),
            opacity: [0.75, 0.8],
            backgroundColor: '#0069cc',
            scale: [2, 2],
            borderRadius: anime.stagger(['50%', '50%'], {grid: [32, 5], from: 'center'}),
        }).add({ // back to sq, shrink, change color
            targets: '.square',
            rotateZ: anime.stagger([45, 45], {grid: [32, 5], from: 'center', axis: 'x'}),
            easing: 'easeInOutCirc',
            delay: anime.stagger(50, {grid: [32, 5], from: 'center'}),
            opacity: [0.8, 0.5],
            backgroundColor: '#006900',
            scale: [2, 0.8],
            borderRadius: anime.stagger(['0%', '0%'], {grid: [32, 5], from: 'center'}),
        }).add({ // transform into circles
            targets: '.square',
            rotateZ: anime.stagger([315, 315], {grid: [32, 5], from: 'center', axis: 'x'}),
            easing: 'easeInOutCirc',
            delay: anime.stagger(30, {grid: [32, 5], from: 'center'}),
            opacity: [0.5, 0.8],
            backgroundColor: '#226922',
            scale: [0.8, 1.2],
            borderRadius: anime.stagger(['50%', '50%'], {grid: [32, 5], from: 'center'}),
        }).add({
            targets: '.square',
            translateX: anime.stagger(50, {grid: [32, 5], from: 'center', axis: 'x'}),
            translateY: anime.stagger(50, {grid: [32, 5], from: 'center', axis: 'y'}),
            rotateZ: anime.stagger([45, 45], {grid: [32, 5], from: 'center', axis: 'x'}),
            // rotateZ: 225,
            easing: 'easeInOutCirc',
            delay: anime.stagger(30, {grid: [32, 5], from: 'center'}),
            opacity: [0.8, 0.6],
            backgroundColor: '#bb2222',
            scale: [1.2, 1.6],
            borderRadius: anime.stagger(['0%', '0%'], {grid: [32, 5], from: 'center'}),
        });
    }, []);
    return (
      <div style={{margin: '10rem 0rem'}}>
        <div className='square-grid'>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square mid"></div>
            <div className="square mid"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
        </div>
        <div className='square-grid'>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square mid"></div>
            <div className="square mid"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
        </div>
        <div className='square-grid'>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square mid"></div>
            <div className="square mid"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
        </div>
        <div className='square-grid'>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square mid"></div>
            <div className="square mid"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
        </div>
        <div className='square-grid'>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square mid"></div>
            <div className="square mid"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
        </div>
        <img src={acmLogo} alt="" className='acm-logo'></img>
      </div>
    );
}

export default TitleAnimation
