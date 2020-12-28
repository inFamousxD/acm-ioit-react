import React from 'react';

import TitleAnimation from './TitleAnimation/TitleAnimation';
import Contact from './Contact/Contact';
import AboutIOIT from './AboutIOIT/AboutIOIT';
import DigitalLibrary from './DigitalLibrary/DigitalLibrary';

const Dashboard = () => {
    return (
        <div>
            <TitleAnimation />
            <DigitalLibrary />
            <AboutIOIT />
            <Contact />
        </div>
    )
}

export default Dashboard
