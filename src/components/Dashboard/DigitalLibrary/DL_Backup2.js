import React from 'react';
import './DigitalLibrary.css';
import { anime } from 'react-anime';

const DigitalLibrary = () => {

    React.useEffect(() => {
        let gearMain = anime.timeline({
            loop: true,
            autoplay: true,
            direction: 'alternate',
            duration: 5000
        })
        
        gearMain.add({
            targets: '.gear-main',
            rotateZ: 275,
            easing: 'easeInOutQuad'
        });

        let gearSecondary = anime.timeline({
            loop: true,
            autoplay: true,
            direction: 'alternate',
            duration: 5000
        })

        gearSecondary.add({
            targets: '.gear-secondary',
            rotateZ: -360*1.25,
            easing: 'easeInOutQuad'
        });

        let gearTernary = anime.timeline({
            loop: true,
            autoplay: true,
            direction: 'alternate',
            duration: 5000
        })

        gearTernary.add({
            targets: '.gear-ternary',
            rotateZ: 360*2.5,
            easing: 'easeInOutQuad'
        });
    }, [])

    return (
        <React.Fragment>
            <div style={{
                height: '20vh',
                backgroundColor: '#000'
            }} />
            <div className='digital-library-container'>
                <div className='wip'>Work in Progress : .. / DigitalLibrary</div>
                <img className='gear-main' src='https://img.pngio.com/cogwheel-element-equipment-fix-gearwheel-industry-mechanism-repair-png-gear-wheel-980_982.png' alt='' />
                <img className='gear-secondary' src='https://img.pngio.com/cogwheel-element-equipment-fix-gearwheel-industry-mechanism-repair-png-gear-wheel-980_982.png' alt='' />
                <img className='gear-ternary' src='https://img.pngio.com/cogwheel-element-equipment-fix-gearwheel-industry-mechanism-repair-png-gear-wheel-980_982.png' alt='' />
            </div>
        </React.Fragment>
    )
}

export default DigitalLibrary;
