import React from 'react';

import TitleAnimation from './TitleAnimation/TitleAnimation';
import Contact from '../Contact/Contact';
import AboutIOIT from '../AboutIOIT/AboutIOIT';
import DigitalLibrary from './DigitalLibrary/DigitalLibrary';
import News from './NewsFlash/News';

const Dashboard = () => {
    return (
        <div>
            <TitleAnimation />
            <DigitalLibrary />
            <News />
            <AboutIOIT />
            <Contact />
        </div>
    )
}

export default Dashboard;
